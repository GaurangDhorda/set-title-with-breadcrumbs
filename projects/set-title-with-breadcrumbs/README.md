# Set Title with Breadcrumbs

For library version 0.0.9 , This angular library is used to set Page title and detects angular-router to generate breadcrumbs for your site map. In order to work with this library you have to set app-routing.module.ts with data object properlly.

For Library version 0.0.10 Now, this library is ready to use with standalone components as well.

# Features!

- generate breadcrumbs
- Sets page title
- adds data property to angular router

### Tech

This library uses below projects to work properly:

- [Angular] - An angular component and service!

### Installation

This library requires [Angular Core CLI](https://cli.angular.io/) to run.

Install the Library.

```sh
$ npm i set-title-with-breadcrumbs
```

For production environments...

### Plugins

Instructions on how to use this library in your own application are linked below.

```
    Step 1 [add below code inside imports array of your app.module.ts] :

    import { SetTitleWithBreadcrumbsModule} from 'set-title-with-breadcrumbs';
    @NgModule({
        imports : [SetTitleWithBreadcrumbsModule]
    })
```

```
    Step 2 [Now adds lib-set-title-with-breadcrumbs component to root of your component]

        <lib-set-title-with-breadcrumbs></lib-set-title-with-breadcrumbs>

```

```
    Step 3 [In app-routing.module.ts of your file add data:{} ]

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    data: { title: "Root Page", breadcrums: "Root" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login Page", breadcrums: "Login" }
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Home Page", breadcrums: "Home" },
    children: [
      {
        path: "records",
        component: RecordsComponent,
        data: { title: "Home / Records Page", breadcrums: "Records" },
        children: [
          {
            path: "findrecords",
            component: HelloComponent,
            data: { title: "Find Records Page", breadcrums: "Find-Records" }
          }
        ]
      }
    ],
    canActivate: [ProtectRouteGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About Page", breadcrums: "About" },
    canActivate: [ProtectRouteGuard]
  }
];

```

Each data object must have title and breadcrumbs property.

### Demo

For old module demo checkout github repo and see for breadcrumbs-project demo inside projects folder of repository.
For new standalone components check out this [stackblitz link](https://stackblitz.com/edit/stackblitz-starters-mjhtnm?file=src%2Fmain.ts)

### Github Source Repository Link

Wants to collaborate with this open source library, You can visit this [Github Repository](https://github.com/GaurangDhorda/set-title-with-breadcrumbs) and create your feature pull requests.

### Author

GRD techlab.
Gaurang Dhorda
