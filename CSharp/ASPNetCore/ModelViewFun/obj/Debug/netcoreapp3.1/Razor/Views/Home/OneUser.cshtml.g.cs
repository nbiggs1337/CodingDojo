#pragma checksum "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/OneUser.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ec28bb5f0910d93963b911664026f2aa9f17d15e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_OneUser), @"mvc.1.0.view", @"/Views/Home/OneUser.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/_ViewImports.cshtml"
using ModelViewFun;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/_ViewImports.cshtml"
using ModelViewFun.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ec28bb5f0910d93963b911664026f2aa9f17d15e", @"/Views/Home/OneUser.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1e14a9e51092a22c5751418f9e9951944e2fae34", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_OneUser : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<User>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/OneUser.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Here is a User!</h1>\r\n    <p>");
#nullable restore
#line 9 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/OneUser.cshtml"
  Write(Model.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 9 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/OneUser.cshtml"
                   Write(Model.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<User> Html { get; private set; }
    }
}
#pragma warning restore 1591
