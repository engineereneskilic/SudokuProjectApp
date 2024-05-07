using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using sudokuproject.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace sudokuproject.Controllers
{
	// Buraya sadece adminler erişebilir
    public class AdminController : Controller
    {
		private UserManager<ApplicationUser> userManager;
		public AdminController()
		{
			var userStore = new UserStore<ApplicationUser>(new IdentitiyDataContext());
			userManager = new UserManager<ApplicationUser>(userStore);
		}

		// GET: Admin
		public ActionResult Index()
        {
			ViewBag.Title = "Admin";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View(userManager.Users);
        }
    }
}