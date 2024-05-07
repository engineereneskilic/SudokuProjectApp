using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using sudokuproject.Identity;
using sudokuproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace sudokuproject.Controllers
{
	[Authorize(Roles ="Admin")]
	public class RoleAdminController : Controller
	{
		private RoleManager<IdentityRole> roleManager;
		private UserManager<ApplicationUser> userManager;
		public RoleAdminController()
		{
			roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new IdentitiyDataContext()));

			var userStore = new UserStore<ApplicationUser>(new IdentitiyDataContext());
			userManager = new UserManager<ApplicationUser>(userStore);


		}

		// GET: RoleAdmin
		public ActionResult Index()
		{
			ViewBag.Title = "Role Admin";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View(roleManager.Roles);
		}


		[HttpGet]
		public ActionResult Create()
		{
			ViewBag.Title = "Role Admin";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View();
		}


		[HttpPost]
		public ActionResult Create(string name)
		{
			if (ModelState.IsValid)
			{
				var result = roleManager.Create(new IdentityRole(name));

				if (result.Succeeded)
				{
					return RedirectToAction("Index");
				}
				else
				{
					foreach (var item in result.Errors)
					{
						ModelState.AddModelError("", item);
					}
				}

			}

			return View(name);
		}


		[HttpPost]
		public ActionResult Delete(string id)
		{

			var role = roleManager.FindById(id);

			if (role != null)
			{
				var result = roleManager.Delete(role);
				if (result.Succeeded)
				{
					return RedirectToAction("Index");
				}
				else
				{
					return View("Error", result.Errors);
				}
			}
			else
			{
				return View("Error", new string[] { "System not a role !" });
			}
		}


		[HttpGet]
		public ActionResult Edit(string id)
		{
			ViewBag.Title = "Role Admin Edit";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";

			// gelen id ile rol bilgilerine ulaşalım..
			var role = roleManager.FindById(id);

			var members = new List<ApplicationUser>();
			var nonmembers = new List<ApplicationUser>();


			foreach (var user in userManager.Users.ToList())
			{
				/*userid gelen role içerisindeyse o zaman o rolün bir üyesidir. Üyeler gurubuna gitsin deilse; değildir o zaman değiller sınıfına girsin*/
				var list = userManager.IsInRole(user.Id, role.Name) ? members : nonmembers;

				list.Add(user);
			}
			// kullanıcının verdikleri ona geri gitsin..
			return View(new RoleEditModel()
			{
				Role = role,
				Members = members,
				NonMembers = nonmembers
			});
		}


		[HttpPost]
		public ActionResult Edit(RoleUpdateModel model)
		{
			IdentityResult result;

			/*rolename (role) geldiyse*/
			if (ModelState.IsValid)
			{
				/*boş gelirse boş dizi olarak dönsün hata önlensin(Zaten dönmez)*/
				foreach (var userId in model.IdsToAdd?? new string[] { })
				{
					/*modeldeki checkboxın işaretleiği id değerini istenilen role atıyoruz(set)*/
					result = userManager.AddToRole(userId,model.RoleName);

					if (!result.Succeeded) // hat varsa ilgili erroru geri gönder
					{
						return View("Error",result.Errors);
					}
				}


				foreach (var userId in model.IdsToDelete?? new string[] { })
				{
					
					result = userManager.RemoveFromRole(userId, model.RoleName);
					if (!result.Succeeded)
					{
						return View("Error", result.Errors);
					}
				}

				return RedirectToAction("Index");
			}


			return View("Error", new string[] { "No Role searched"});
		}
	}
}