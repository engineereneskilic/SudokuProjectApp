using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using sudokuproject.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using sudokuproject.Models;
using Microsoft.Owin.Security;

namespace sudokuproject.Controllers
{
	[Authorize]
    public class AccountController : Controller
    {
		private UserManager<ApplicationUser> userManager;
		public AccountController()
		{
			var userStore = new UserStore<ApplicationUser>(new IdentitiyDataContext());
			userManager = new UserManager<ApplicationUser>(userStore);

			userManager.PasswordValidator = new CustomPasswordValidator()
			{
				/*sayı zorunluluğu*/
				RequireDigit = true,
				RequiredLength = 7, // en az 7 karakter
				RequireLowercase=true,
				RequireUppercase=true
				
				
			};

			userManager.UserValidator = new UserValidator<ApplicationUser>(userManager)
			{
				RequireUniqueEmail = true // Aynı mail adresinden bir daha gelmesin
			    
			};
		}
        [AllowAnonymous]
        public ActionResult Index()
        {
		
			
			return View();
        }

		[AllowAnonymous]
		public ActionResult Register()
		{
			ViewBag.Title = "Register";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View();
		}
		[HttpPost]
		[ValidateAntiForgeryToken]
		[AllowAnonymous]
		public ActionResult Register(Register model)
		{
			if (ModelState.IsValid)
			{
				var user = new ApplicationUser();
				user.UserName = model.UserName;
				user.Email = model.Email;

				var result = userManager.Create(user, model.Password);

				if (result.Succeeded)
				{
					/*If the admin has created the user successfully, go to the login page. That is, if our web system has at least one registered user.*/
					return RedirectToAction("Login");
				}
				else
				{
					foreach (var error in result.Errors)
					{
						ModelState.AddModelError("", error);
					}
				}
			}

			return View(model);
		}



		[HttpGet]
		[AllowAnonymous]
		public ActionResult Login(string returnUrl)
		{
			ViewBag.Title = "Login";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			ViewBag.returnUrl = returnUrl;

			/*Oturum açmış olan bir kullanıcı login sayfasına atılıyorsa(kendi logout butonuna basmadıkca) 
			 o kullanıcı yetkisiz sayfalara erişmek istiyordur. Logine gelen yönlendirmelerde
			 authentication durumu ararız varsa kullanıcının yetkisi olmadığını o nedenlede 
			 yanlış sayfaya gittiğini göstermeli 
			 */
			if (HttpContext.User.Identity.IsAuthenticated)
			{
				return View("Error",new string[] { "You do not have the right to access this page !" });
			}

			
			
			return View();
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		[AllowAnonymous]
		public ActionResult Login(LoginModel model,string returnUrl)
		{
			if (ModelState.IsValid)
			{



				var user = userManager.Find(model.UserName, model.Password);

				if (user == null)
				{
					ModelState.AddModelError("", "Wrong Username or Password !");
				}
				else
				{
					// login or logout manager
					var authManager = HttpContext.GetOwinContext().Authentication;
					var identity = userManager.CreateIdentity(user, "ApplicationCookie");
					var authProperties = new AuthenticationProperties()
					{
						IsPersistent = true
					};
					authManager.SignOut();
					authManager.SignIn(authProperties, identity);

					return Redirect( string.IsNullOrEmpty(returnUrl) ? "/":returnUrl);// if Url is empty so redirect to main page
				}

			}
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			ViewBag.returnUrl = returnUrl;
			return View(model);
		}

		public ActionResult Logout()
		{
			var authManager = HttpContext.GetOwinContext().Authentication;
			authManager.SignOut();
			return RedirectToAction("Login");
		}
	}
}