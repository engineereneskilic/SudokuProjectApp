using Microsoft.AspNet.Identity.EntityFramework;
using sudokuproject.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace sudokuproject.Models
{
	public class LoginModel
	{
		[Required]
		public string UserName { get; set; }


		[Required]
		[StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
		[DataType(DataType.Password)]
		public string Password { get; set; }
	}

	public class Register
	{
		[Required]
		public string UserName { get; set; }
		[Required(ErrorMessage = "The email address is required")]
		[EmailAddress(ErrorMessage = "Invalid Email Address")]
		[RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]

		public string Email { get; set; }

		[Required]
		[StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
		[DataType(DataType.Password)]
		public string Password { get; set; }
	}

	public class RoleEditModel
	{
		public IdentityRole Role { get; set; }
		public IEnumerable<ApplicationUser> Members { get; set; }
		public IEnumerable<ApplicationUser> NonMembers { get; set; }
	}


	public class RoleUpdateModel
	{
		[Required]
		public string RoleName { get; set; }
		public string RoleId { get; set; }
		public string[] IdsToAdd { get; set; }
		public string[] IdsToDelete { get; set; }
	}
}