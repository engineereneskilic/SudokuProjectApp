using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace sudokuproject.Controllers
{

	[Authorize]
	public class HomeController : Controller
	{
		 

		
		public ActionResult Index()
		{
			ViewBag.Title = "SUDOKU GAME";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View();
		}

		public ActionResult About()
		{
			

			return View();
		}

		public ActionResult Contact()
		{
			

			return View();
		}

		public ActionResult Termofuse()
		{
			ViewBag.Title = "Term of Use";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View();
		}
		public ActionResult Privacypolicy()
		{
			ViewBag.Title = "Privacy Policiy";
			ViewBag.SiteName = "Sudoku";
			ViewBag.SiteAddress = "sudoku.com";
			ViewBag.EmailTo = "info@sudoku.com";
			return View();
		}
	}
}