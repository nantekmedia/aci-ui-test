import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../services/menu/menu.service';
import { UserService } from '../../services/user/user.service';
import { HeaderSubService } from '../../services/layout/header-sub/header-sub.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
    selector: 'acp-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    @ViewChild('drawer') sidenav: MatSidenav;

    pageTitle = '';
    menuItems = [];
    currentUser = this.userService.currentUser;
    isHandset = false;

    public showAppContainer: Boolean = false;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        public translate: TranslateService,
        public menuService: MenuService,
        public userService: UserService,
        public subHeaderService: HeaderSubService
    ) {
        
        this.translate.onLangChange.subscribe((data) => {
            // console.log(data);
        });
        // this.menuItems = this.menuService['main'];

        breakpointObserver
            .observe([
                Breakpoints.Small,
                Breakpoints.XSmall,
                Breakpoints.Handset,
            ])
            .subscribe((result) => {
                this.isHandset = result.matches;
            });
        // this.userService.setUser(this.user1);
        // this.userService.setUser(this.user2);
        // this.userService.setUser(this.user3);

        if (this.userService.selectUserId === '') {
            if(localStorage !== undefined && localStorage['userId'] !== undefined)
            {
                console.log('selectUser: ' + localStorage['userId'])
                this.userService.selectUser(localStorage['userId'])
            }
            // else{
            //     this.userService.selectUser('1');  
            // }    
        }
    }

    public ngOnInit() {
        this.menuService.onSetMainMenu.subscribe((menu) => {
            this.menuItems = menu;
        });

        this.subHeaderService.titleChange.subscribe((title) => { this.pageTitle = title})
        this.menuService.refreshMenu();
    }

    public langSwitch() {
        // this._translate.currentLang
        // this._translate.use('en');
        this.translate.currentLang === 'en'
            ? this.translate.use('fr')
            : this.translate.use('en');
    }

    mouseenter() {
        // console.log('mouseenter');
    }

    mouseleave() {
        // console.log('mouseleave');
    }

    public onValChange(e: MatSlideToggleChange){
        console.log(e);
        this.showAppContainer = e.checked
    }
}
