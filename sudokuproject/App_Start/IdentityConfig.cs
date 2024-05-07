using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(sudokuproject.IdentityConfig))]

namespace sudokuproject
{
	/*
	It is the middleware settings file between the web application and Sql Server. With this file, we will be introducing how we want to do identity operations from the web application to the sql server. 
	*/


	public class IdentityConfig
	{

		public void Configuration(IAppBuilder app)
		{
			// We can use cookies or tokens. We prefer cookies
			app.UseCookieAuthentication(new Microsoft.Owin.Security.Cookies.CookieAuthenticationOptions
			{

				AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
				LoginPath = new PathString("/Account/Login")

			}) ;
		}
	}
}
