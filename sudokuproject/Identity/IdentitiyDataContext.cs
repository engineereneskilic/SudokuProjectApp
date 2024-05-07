using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sudokuproject.Identity
{
	public class IdentitiyDataContext:IdentityDbContext<ApplicationUser>
	{
		public IdentitiyDataContext():base("identityConnection")
		{

		}
	}
}