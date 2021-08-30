import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './service/auth-guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
      
        children: [
            { path: '', redirectTo: '/dashboard/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'starter',
                loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
            },
            {
                path: 'component',
                loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
            },
            { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
            { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
            { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
            {
                path: 'widgets',
                loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
            },
            {
                path: 'extra-component',
                loadChildren:
                    () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
            },
            { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
            {
                path: 'apps/email',
                loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
            },
            {
                path: 'sample-pages',
                loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'vendors',
                loadChildren: () => import('./pages/vendors/vendors.module').then(m => m.VendorsModule)
            },
            {
                path: 'review',
                loadChildren: () => import('./pages/review/review.module').then(m => m.ReviewModule)
            },
            {
                path: 'notification',
                loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
            },
            {
                path: 'inventory',
                loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule)
            },
            {
                path: 'cms',
                loadChildren: () => import('./pages/cms/cms.module').then(m => m.CmsModule)
            },
            {
                path: 'subscription',
                loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)
            },
            {
                path: 'revenue',
                loadChildren: () => import('./pages/revenue/revenue.module').then(m => m.RevenueModule)
            },
            {
                path: 'subadmin',
                loadChildren: () => import('./pages/sub-admin/sub-admin.module').then(m => m.SubAdminModule)
            },
             {
                path: 'orders',
                loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
            },
            {
                path: 'product',
                loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
            },
            {
                path: 'others',
                loadChildren: () => import('./pages/others/others.module').then(m => m.OthersModule)
            }
        ]
    },
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: 'authentication',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
