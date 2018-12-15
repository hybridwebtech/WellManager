This ASP.NET Core project is a hybridized version of the standard Web API template with Angular SPA support added.

The .NET Core template for Angular does not support the latest version of Angular (v7.x as of the date of this doc).

To add support for Angular v7, I followed the steps outlined in 
"How to use latest Angular version inside your ASP.NET Core SPA", 
https://devlinduldulao.pro/how-to-use-latest-angular-version-inside-your-asp-net-core-spa/

Specifically, the second section, adding Angular to a WEBAPI project, was followed. Except, I used the
.NET Core CLI instead of VS or Rider.

0. Install .NET Core 2.1 and the latest Angular 
1. Create the root folder/directory for the project. CD into the directory
2. dotnet new webapi -n <<project name>>
3. CD into the project folder
4. ng new ClientApp  (or whatever) to create the Angular SPA skeleton 

5. Modify the .NET Core Startup.cs file. Add the following code blocks:

   -- Add the following namespace reference
   
+  using Microsoft.AspNetCore.SpaServices.AngularCli;

   -- In method ConfigureServices(IServiceCollection services), immediately after services.AddMvc()...
   
+   // In production, the Angular files will be served from this directory
+   services.AddSpaStaticFiles( configuration =>
+   {
+       configuration.RootPath = "ClientApp/dist";  // replace ClientApp with whatever you specified earlier
+   });
   
   
   -- In method Configure( IApplicationBuilder app ... )
   
    if ( env.IsDevelopment() )
    {
        ...
    }
    else
    {
+       app.UseExceptionHandler( "/Error" );
        app.UseHsts();
    }
    
    app.UseHttpsRedirection();
+   app.UseStaticFiles();
+   app.UseSpaStaticFiles();
+   app.UseMvc( routes =>
+   {
+       routes.MapRoute(
+           name: "default",
+           template: "{controller}/{action=Index}/{Id?}" );
+   });
+
+   app.UseSpa( spa =>
+   {
+       // To learn more about options for serving an Angular SPA from ASP.NET Core,
+       // see https://go.microsoft.com/fwlink/?linkid=864501
+
+       spa.Options.SourcePath = "ClientApp";  // .. or whatever you called the Angular SPA folder
+
+       if ( env.IsDevelopment() )
+       {
+           spa.UseAngularCliServer( npmScript: "start" );
+       }
+   });


6. In Properties/launchSettings.json, remove "launchUrl": "api/values". There are two occurrences

   "profiles": {
     "IIS Express": {
       .
       .
       .
-      "launchUrl": "api/values", 
       .
       .
       .
     }
     "AspCoreNgApp": {
       .
       .
       .
-      "launchUrl": "api/values",


7. From the .NET Core project directory execute "dotnet run". The Angular SPA default page should be displayed. Note
that there may be some delay because .NET Core has to compile the project and Angular has to compile the source.

Note that three different URLs will be displayed in the console log. Two are for ASP.NET core (including one https:)
and one is from Angular. Disregard the Angular URL.
