webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nasa_test_nasa_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nasa_picture_test_nasa_picture_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nasa_picture_details_nasa_picture_details_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__space_banner_default_space_banner_default_component__ = __webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_apod_apod_component__ = __webpack_require__("../../../../../src/app/components/apod/apod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_front_page_front_page_component__ = __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_apodarchive_apodarchive_component__ = __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_search_search_profile_search_profile_component__ = __webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_search_search_nasa_search_nasa_component__ = __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_search_search_cb_search_cb_component__ = __webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_create_object_create_object_component__ = __webpack_require__("../../../../../src/app/components/create-object/create-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_picture_user_pictures_user_pictures_component__ = __webpack_require__("../../../../../src/app/components/picture/user-pictures/user-pictures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_album_user_album_user_album_component__ = __webpack_require__("../../../../../src/app/components/album/user-album/user-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_picture_picture_new_picture_new_component__ = __webpack_require__("../../../../../src/app/components/picture/picture-new/picture-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_album_album_new_album_new_component__ = __webpack_require__("../../../../../src/app/components/album/album-new/album-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_picture_service_client__ = __webpack_require__("../../../../../src/app/services/picture.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_album_album_list_album_list_component__ = __webpack_require__("../../../../../src/app/components/album/album-list/album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_pub_service_client__ = __webpack_require__("../../../../../src/app/services/pub.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_auth_guard_service_client__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_search_search_ce_search_ce_component__ = __webpack_require__("../../../../../src/app/components/search/search-ce/search-ce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_search_search_pub_search_pub_component__ = __webpack_require__("../../../../../src/app/components/search/search-pub/search-pub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_search_search_nasa_search_nasa_detail_search_nasa_detail_component__ = __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_album_carousel_album_carousel_component__ = __webpack_require__("../../../../../src/app/components/album-carousel/album-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_edit_object_edit_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_edit_object_edit_user_object_edit_user_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_edit_object_edit_celestial_body_object_edit_celestial_body_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_edit_object_edit_celestial_event_object_edit_celestial_event_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_edit_object_edit_publication_object_edit_publication_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_nasa_test_nasa_test_component__["a" /* NasaTestComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_nasa_picture_test_nasa_picture_test_component__["a" /* NasaPictureTestComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_front_page_front_page_component__["a" /* FrontPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nasa_picture_details_nasa_picture_details_component__["a" /* NasaPictureDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_apod_apod_component__["a" /* ApodComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_apodarchive_apodarchive_component__["a" /* ApodarchiveComponent */],
            __WEBPACK_IMPORTED_MODULE_9__space_banner_default_space_banner_default_component__["a" /* SpaceBannerDefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_create_post_create_post_component__["a" /* CreatePostComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_search_search_profile_search_profile_component__["a" /* SearchProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_search_search_nasa_search_nasa_component__["a" /* SearchNasaComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_search_search_cb_search_cb_component__["a" /* SearchCbComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_picture_user_pictures_user_pictures_component__["a" /* UserPicturesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_album_user_album_user_album_component__["a" /* UserAlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_picture_picture_new_picture_new_component__["a" /* PictureNewComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_album_album_new_album_new_component__["a" /* AlbumNewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_album_album_list_album_list_component__["a" /* AlbumListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_create_object_create_object_component__["a" /* CreateObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_search_search_ce_search_ce_component__["a" /* SearchCeComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_search_search_pub_search_pub_component__["a" /* SearchPubComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_search_search_nasa_search_nasa_detail_search_nasa_detail_component__["a" /* SearchNasaDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_album_carousel_album_carousel_component__["a" /* AlbumCarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_edit_object_edit_object_component__["a" /* EditObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_edit_object_edit_user_object_edit_user_object_component__["a" /* EditUserObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_edit_object_edit_celestial_body_object_edit_celestial_body_object_component__["a" /* EditCelestialBodyObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_edit_object_edit_celestial_event_object_edit_celestial_event_object_component__["a" /* EditCelestialEventObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_edit_object_edit_publication_object_edit_publication_object_component__["a" /* EditPublicationObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_44_angular4_carousel__["b" /* CarouselModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_nasa_service_client__["a" /* NasaServiceClient */], __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_post_service_client__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_13__services_cb_service_client__["a" /* CBService */], __WEBPACK_IMPORTED_MODULE_36__services_ce_service_client__["a" /* CEService */], __WEBPACK_IMPORTED_MODULE_37__services_pub_service_client__["a" /* PubService */], __WEBPACK_IMPORTED_MODULE_32__services_picture_service_client__["a" /* PictureServiceClient */],
            __WEBPACK_IMPORTED_MODULE_33__services_album_service_client__["a" /* AlbumServiceClient */], __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_38__services_auth_guard_service_client__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_51__services_admin_service_client__["a" /* AdminServiceClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nasa_test_nasa_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nasa_picture_test_nasa_picture_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_front_page_front_page_component__ = __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nasa_picture_details_nasa_picture_details_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_apod_apod_component__ = __webpack_require__("../../../../../src/app/components/apod/apod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_apodarchive_apodarchive_component__ = __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_album_user_album_user_album_component__ = __webpack_require__("../../../../../src/app/components/album/user-album/user-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_album_album_new_album_new_component__ = __webpack_require__("../../../../../src/app/components/album/album-new/album-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_picture_picture_new_picture_new_component__ = __webpack_require__("../../../../../src/app/components/picture/picture-new/picture-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_picture_user_pictures_user_pictures_component__ = __webpack_require__("../../../../../src/app/components/picture/user-pictures/user-pictures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_album_album_list_album_list_component__ = __webpack_require__("../../../../../src/app/components/album/album-list/album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_create_object_create_object_component__ = __webpack_require__("../../../../../src/app/components/create-object/create-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service_client__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_edit_object_edit_object_component__ = __webpack_require__("../../../../../src/app/components/edit-object/edit-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");

























var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_21__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'default', component: __WEBPACK_IMPORTED_MODULE_21__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_admin_service_client__["a" /* AdminServiceClient */]] },
    { path: 'edit/:objId', component: __WEBPACK_IMPORTED_MODULE_22__components_edit_object_edit_object_component__["a" /* EditObjectComponent */] },
    { path: ':obtype/:uid', component: __WEBPACK_IMPORTED_MODULE_11__components_user_public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service_client__["a" /* AuthGuard */]] },
    { path: ':obtype/:uid/edit', component: __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    // {path: 'edit', component: EditPublicationObjectComponent},
    { path: 'searchAsteroids', component: __WEBPACK_IMPORTED_MODULE_1__components_nasa_test_nasa_test_component__["a" /* NasaTestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_front_page_front_page_component__["a" /* FrontPageComponent */] },
    { path: 'nasa-pic', component: __WEBPACK_IMPORTED_MODULE_2__components_nasa_picture_test_nasa_picture_test_component__["a" /* NasaPictureTestComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'APOD', component: __WEBPACK_IMPORTED_MODULE_5__components_apod_apod_component__["a" /* ApodComponent */] },
    { path: 'APOD/Archive', component: __WEBPACK_IMPORTED_MODULE_6__components_apodarchive_apodarchive_component__["a" /* ApodarchiveComponent */] },
    { path: 'nasa-pic/:imgid/details', component: __WEBPACK_IMPORTED_MODULE_4__components_nasa_picture_details_nasa_picture_details_component__["a" /* NasaPictureDetailsComponent */] },
    { path: 'testPostComponent', component: __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__["a" /* PostComponent */] },
    { path: 'testListComponent', component: __WEBPACK_IMPORTED_MODULE_10__components_post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_19__components_create_object_create_object_component__["a" /* CreateObjectComponent */] },
    { path: 'user/:uid/posts/new', component: __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'user/:uid/album', component: __WEBPACK_IMPORTED_MODULE_18__components_album_album_list_album_list_component__["a" /* AlbumListComponent */] },
    { path: 'user/:uid/album/new', component: __WEBPACK_IMPORTED_MODULE_15__components_album_album_new_album_new_component__["a" /* AlbumNewComponent */] },
    { path: 'user/:uid/album/:aid', component: __WEBPACK_IMPORTED_MODULE_14__components_album_user_album_user_album_component__["a" /* UserAlbumComponent */] },
    { path: 'user/:uid/album/:aid/pic/new', component: __WEBPACK_IMPORTED_MODULE_16__components_picture_picture_new_picture_new_component__["a" /* PictureNewComponent */] },
    { path: 'user/:uid/album/:aid/pic/:picid', component: __WEBPACK_IMPORTED_MODULE_17__components_picture_user_pictures_user_pictures_component__["a" /* UserPicturesComponent */] },
    { path: ':obtype/:uid/posts/new', component: __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__["a" /* CreatePostComponent */] }
    // so on
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>User List</h1>\r\n<ul>\r\n  <div *ngFor=\"let user of users\">\r\n    <button (click)=\"goToUserPage(user._id)\">{{user.username}}</button>\r\n  </div>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUserListComponent = (function () {
    function AdminUserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.users = [];
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    AdminUserListComponent.prototype.goToUserPage = function (userId) {
        this.router.navigate(['user/' + userId]);
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminUserListComponent);

var _a, _b;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album-carousel/album-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album-carousel/album-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"albumready\">\r\n<div style=\"width: 450px; height: 300px\">\r\n  <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/album-carousel/album-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__ = __webpack_require__("../../../../../src/app/services/picture.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumCarouselComponent = (function () {
    function AlbumCarouselComponent(pictureService, albumService) {
        this.pictureService = pictureService;
        this.albumService = albumService;
        this.album = [];
        this.albumready = false;
        this.imageSources = [];
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 5000,
            stopAutoplayMinWidth: 768
        };
    }
    AlbumCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pictureService.findPicturesByAlbum(this.albumid).subscribe(function (pictures) {
            for (var i = 0; i < pictures.length; i++) {
                _this.imageSources.push(pictures[i].url);
            }
            _this.albumready = true;
        });
    };
    return AlbumCarouselComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], AlbumCarouselComponent.prototype, "albumid", void 0);
AlbumCarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-album-carousel',
        template: __webpack_require__("../../../../../src/app/components/album-carousel/album-carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album-carousel/album-carousel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_album_service_client__["a" /* AlbumServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_album_service_client__["a" /* AlbumServiceClient */]) === "function" && _b || Object])
], AlbumCarouselComponent);

var _a, _b;
//# sourceMappingURL=album-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/album-list/album-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/album-list/album-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jj-body\">\r\n<div *ngFor=\"let album of albums\">\r\n  <button (click)=\"editAlbum(album._id)\"> {{album.title}}</button>\r\n</div>\r\n<button class=\"btn btn-block btn-primary jj-button-hover\"\r\n        aria-pressed=\"true\" (click)=\"newAlbum()\">\r\n  Create A New Album </button>\r\n<button class=\"btn btn-block btn-primary jj-button-hover\"\r\n        aria-pressed=\"true\" (click)=\"goBackToProfile()\">\r\n  Back To Profile </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/album/album-list/album-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumListComponent = (function () {
    function AlbumListComponent(albumService, activatedRoute, router) {
        this.albumService = albumService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.albums = [];
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.albumService.findAllAlbumsByUser(_this.userId)
                .subscribe(function (albums) {
                _this.albums = albums;
            });
        });
    };
    AlbumListComponent.prototype.newAlbum = function () {
        this.router.navigate(['user/' + this.userId + '/album/new']);
    };
    AlbumListComponent.prototype.editAlbum = function (albumId) {
        this.router.navigate(['user/' + this.userId + '/album/' + albumId]);
    };
    AlbumListComponent.prototype.goBackToProfile = function () {
        this.router.navigate(['user/' + this.userId]);
    };
    return AlbumListComponent;
}());
AlbumListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-album-list',
        template: __webpack_require__("../../../../../src/app/components/album/album-list/album-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/album-list/album-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlbumListComponent);

var _a, _b, _c;
//# sourceMappingURL=album-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/album-new/album-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/album-new/album-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">\r\n      Title\r\n    </label>\r\n    <input name=\"title\"\r\n    id=\"title\"\r\n    type=\"text\"\r\n    placeholder=\"Planets\"\r\n    class=\"form-control\"\r\n    [(ngModel)]=\"title\"\r\n    required/>\r\n    <!--<span class=\"help-block\" *ngIf=\"title.touched && !title.valid\" @TODO>-->\r\n      <!--Please enter an album title!-->\r\n    <!--</span>-->\r\n\r\n    <label for=\"description\">\r\n      Description\r\n    </label>\r\n    <input [(ngModel)]=\"description\"\r\n    id=\"description\"\r\n    name=\"description\"\r\n    placeholder=\"...\"\r\n    class=\"form-control\"\r\n    required/>\r\n    <!--<span class=\"help-block\" *ngIf=\"description.touched && !description.valid\" @TODO>-->\r\n      <!--Please enter an album description!-->\r\n    <!--</span>-->\r\n  </div>\r\n  <button (click)=\"commit(title, description)\" class=\"btn btn-success btn-block jj-button-hover\" aria-pressed=\"true\">\r\n    Create\r\n  </button>\r\n  <button (click)=\"cancel()\" class=\"btn btn-danger btn-block jj-button-hover\" aria-pressed=\"true\">\r\n    Cancel\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/album/album-new/album-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumNewComponent = (function () {
    function AlbumNewComponent(albumService, activatedRoute, router) {
        this.albumService = albumService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.album = {};
    }
    AlbumNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.dateCreated = new Date();
    };
    AlbumNewComponent.prototype.commit = function (title, description) {
        var _this = this;
        this.album = { uploaderId: this.userId, title: title, description: description, dateCreated: this.dateCreated };
        this.albumService.createAlbum(this.userId, this.album)
            .subscribe(function (album) {
            _this.router.navigate(['user/' + _this.userId + '/album']);
        });
    };
    AlbumNewComponent.prototype.cancel = function () {
        this.router.navigate(['user/' + this.userId]);
    };
    return AlbumNewComponent;
}());
AlbumNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-album-new',
        template: __webpack_require__("../../../../../src/app/components/album/album-new/album-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/album-new/album-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlbumNewComponent);

var _a, _b, _c;
//# sourceMappingURL=album-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/user-album/user-album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/user-album/user-album.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">\r\n      Title\r\n    </label>\r\n    <input name=\"title\"\r\n           id=\"title\"\r\n           type=\"text\"\r\n           placeholder=\"Planets\"\r\n           class=\"form-control\"\r\n           [(ngModel)]=\"title\"\r\n           required/>\r\n    <!--<span class=\"help-block\" *ngIf=\"title.touched && !title.valid\" @TODO>-->\r\n      <!--Please enter an album title!-->\r\n    <!--</span>-->\r\n\r\n    <label for=\"description\">\r\n      Description\r\n    </label>\r\n    <input [(ngModel)]=\"description\"\r\n           id=\"description\"\r\n           name=\"description\"\r\n           placeholder=\"...\"\r\n           class=\"form-control\"s\r\n           required/>\r\n    <!--<span class=\"help-block\" *ngIf=\"description.touched && !description.valid\" @TODO>-->\r\n      <!--Please enter an album description!-->\r\n    <!--</span>-->\r\n  </div>\r\n  <div *ngFor=\"let pic of picturesForDisplay\">\r\n    <img (click)=\"goToPicture(pic._id)\"   class=\"jj-content\" src=\"{{pic.url}}\" [style.width]=\"pic.width\">\r\n  </div>\r\n  <button class=\"btn btn-block btn-success jj-button-hover\" (click)=\"commit(title, description)\">Commit</button>\r\n  <button class=\"btn btn-block btn-danger jj-button-hover\" aria-pressed=\"true\" (click)=\"deleted(albumId)\">Delete</button>\r\n  <button (click)=\"addPicture()\" class=\"btn btn-info btn-block jj-button-hover\"\r\n          aria-pressed=\"true\">Add picture</button>\r\n  <button class=\"btn btn-block btn-primary jj-button-hover\" aria-pressed=\"true\" (click)=\"goBackToAlbums()\">Cancel Changes</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/album/user-album/user-album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__ = __webpack_require__("../../../../../src/app/services/picture.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAlbumComponent = (function () {
    function UserAlbumComponent(albumService, router, activatedRoute, pictureService) {
        this.albumService = albumService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pictureService = pictureService;
        this.pictures = [];
        this.picturesForDisplay = [];
    }
    UserAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.albumId = params['aid'];
        });
        this.albumService.findAlbumById(this.albumId)
            .subscribe(function (album) {
            _this.album = album;
            _this.pictures = album['pictures'];
            _this.title = album['title'];
            _this.description = album['description'];
            for (var i = 0; i < album.pictures.length; i++) {
                _this.pictureService.findPictureById(album.pictures[i])
                    .subscribe(function (pic) {
                    _this.picturesForDisplay.push(pic);
                });
            }
        });
    };
    UserAlbumComponent.prototype.deleted = function (aid) {
        var _this = this;
        this.albumService.deleteAlbum(aid)
            .subscribe(function (status) {
            _this.router.navigate(['user/' + _this.userId + '/album']);
        });
    };
    UserAlbumComponent.prototype.goToPicture = function (picId) {
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId + '/pic/' + picId]);
    };
    UserAlbumComponent.prototype.addPicture = function () {
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId + '/pic/new']);
    };
    UserAlbumComponent.prototype.goBackToAlbums = function () {
        this.router.navigate(['user/' + this.userId + '/album']);
    };
    UserAlbumComponent.prototype.commit = function (title, description) {
        var _this = this;
        this.album = {
            uploaderId: this.userId,
            title: title,
            description: description,
            dateCreated: this.album['dateCreated'],
            pictures: this.pictures
        };
        this.albumService.updateAlbum(this.albumId, this.album)
            .subscribe(function (album) {
            _this.album = album;
            _this.pictures = album['pictures'];
            _this.title = album['title'];
            _this.description = album['description'];
            _this.goBackToAlbums();
        });
    };
    return UserAlbumComponent;
}());
UserAlbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-album',
        template: __webpack_require__("../../../../../src/app/components/album/user-album/user-album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/user-album/user-album.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_album_service_client__["a" /* AlbumServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */]) === "function" && _d || Object])
], UserAlbumComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-album.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n<h1 class = \"jj-font\">Astronomy Picture Of The Day</h1>\r\n<button> <span (click)=\"goToAPODArchive()\">APOD Archive</span> </button>\r\n<img src=\"{{url}}\" width = 100%/>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApodComponent = (function () {
    function ApodComponent(router, nasaService) {
        this.router = router;
        this.nasaService = nasaService;
    }
    ApodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaService.getAPOD()
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
            _this.url = result.hdurl;
        });
    };
    ApodComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    ApodComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    ApodComponent.prototype.goToAPODArchive = function () {
        this.router.navigate(['/APOD/Archive']);
    };
    return ApodComponent;
}());
ApodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apod',
        template: __webpack_require__("../../../../../src/app/components/apod/apod.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apod/apod.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _b || Object])
], ApodComponent);

var _a, _b;
//# sourceMappingURL=apod.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  apodarchive works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApodarchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApodarchiveComponent = (function () {
    function ApodarchiveComponent(router, nasaService) {
        this.router = router;
        this.nasaService = nasaService;
    }
    ApodarchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaService.getAPOD()
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
            _this.url = result.hdurl;
        });
    };
    ApodarchiveComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    ApodarchiveComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    ApodarchiveComponent.prototype.goToAPODArchive = function () {
        this.router.navigate(['/APOD/Archive']);
    };
    return ApodarchiveComponent;
}());
ApodarchiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apodarchive',
        template: __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _b || Object])
], ApodarchiveComponent);

var _a, _b;
//# sourceMappingURL=apodarchive.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-object/create-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-object/create-object.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"container-fluid\">\r\n<form #f=\"ngForm\">\r\n  Select Object to Create:\r\n  <div class=\"form-group form-control\">\r\n\r\n    <label>Obj Type:</label>\r\n\r\n    <label class=\"radio-inline\" *ngIf=\"loggedInUserType === 'ADMIN'\">\r\n      <input type=\"radio\" name=\"optradio\" value='User' [(ngModel)]=\"objType\" >User\r\n    </label>\r\n\r\n    <label class=\"radio-inline\">\r\n      <input type=\"radio\" name=\"optradio\" value='Cb' [(ngModel)]=\"objType\" >Celestial Body\r\n    </label>\r\n\r\n    <label class=\"radio-inline\" *ngIf=\"loggedInUserType !== 'PROFESSIONAL'\">\r\n      <input type=\"radio\" name=\"optradio\" value='Ce' [(ngModel)]=\"objType\" >Celestial Event\r\n    </label>\r\n\r\n    <label class=\"radio-inline\" *ngIf=\"loggedInUserType === 'ADMIN' || loggedInUserType === 'UNIVERSITY'\">\r\n      <input type=\"radio\" name=\"optradio\" value='Pub' [(ngModel)]=\"objType\" >Publication\r\n    </label>\r\n</div>\r\n\r\n\r\n  <div [ngSwitch]=\"objType\">\r\n    <div *ngSwitchCase=\"'User'\">\r\n      <div class=\"form-group form-control\">\r\n        <label>User Type:</label>\r\n\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" name=\"optradio\" value='AMATEUR' [(ngModel)]=\"userType\" >Amateur Astronomer\r\n        </label>\r\n\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" name=\"optradio\" value='PROFESSIONAL' [(ngModel)]=\"userType\" >Professional Astronomer\r\n        </label>\r\n\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" name=\"optradio\" value='ORGANIZATION' [(ngModel)]=\"userType\" >Space Organization\r\n        </label>\r\n\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" name=\"optradio\" value='UNIVERSITY' [(ngModel)]=\"userType\" >University\r\n        </label>\r\n\r\n      </div>\r\n      <input name=\"username\"\r\n             id=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"username\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #username=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n    </span>\r\n\r\n      <input name=\"password\"\r\n             id=\"password\"\r\n             type=\"password\"\r\n             placeholder=\"password\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #password=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n      <input name=\"verify password\"\r\n             id=\"verify_password\"\r\n             type=\"password\"\r\n             placeholder=\"verify password\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #verify_password=\"ngModel\">\r\n\r\n      <span class=\"help-block\" *ngIf=\"!verify_password.valid && verify_password.touched\">\r\n      Please enter password!\r\n    </span>\r\n      <span class=\"help-block\" *ngIf=\"verify_password.value != password.value\">\r\n      Passwords do not match!\r\n    </span>\r\n\r\n      <input name=\"email\"\r\n             id=\"email\"\r\n             type=\"text\"\r\n             placeholder=\"email\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #email=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\r\n      Please enter email!\r\n    </span>\r\n      <input name=\"firstName\"\r\n             id=\"firstName\"\r\n             type=\"text\"\r\n             placeholder=\"first name\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #firstName=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n      Please enter first name!\r\n    </span>\r\n      <input name=\"lastName\"\r\n             id=\"lastName\"\r\n             type=\"text\"\r\n             placeholder=\"last name\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #lastName=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n      Please enter last name!\r\n    </span>\r\n      <input name=\"DOB\"\r\n             id=\"DOB\"\r\n             type=\"date\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #DOB=\"ngModel\"/>\r\n      <input name=\"phone\"\r\n             id=\"phone\"\r\n             type=\"tel\"\r\n             placeholder=\"xxx-xxx-xxxx\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #phone=\"ngModel\"/>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Cb'\">\r\n      <input name=\"cbname\"\r\n             id=\"cbname\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cbname=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!cbname.valid && cbname.touched\">\r\n      Please enter name!\r\n    </span>\r\n\r\n\r\n      <input name=\"region\"\r\n             id=\"region\"\r\n             type=\"text\"\r\n             placeholder=\"region\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #region=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!region.valid && region.touched\">\r\n      Please enter region!\r\n    </span>\r\n      <input name=\"types\"\r\n             id=\"types\"\r\n             type=\"text\"\r\n             placeholder=\"types\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #types=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!types.valid && types.touched\">\r\n      Please enter types, comma seperated!\r\n    </span>\r\n      <input name=\"wiki\"\r\n             id=\"wiki\"\r\n             type=\"text\"\r\n             placeholder=\"wiki link\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #wiki=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!wiki.valid && wiki.touched\">\r\n      Please enter wiki link!\r\n    </span>\r\n      <input name=\"picture\"\r\n             id=\"picture\"\r\n             type=\"text\"\r\n             placeholder=\"picture url\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #picture=\"ngModel\"/>\r\n\r\n    </div>\r\n    <div *ngSwitchCase=\"'Ce'\">\r\n      <input name=\"cename\"\r\n             id=\"cename\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cename=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!cename.valid && cename.touched\">\r\n      Please enter name!\r\n    </span>\r\n\r\n\r\n      <input name=\"ceregion\"\r\n             id=\"ceregion\"\r\n             type=\"text\"\r\n             placeholder=\"region\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #ceregion=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!ceregion.valid && ceregion.touched\">\r\n      Please enter region!\r\n    </span>\r\n      <input name=\"cetypes\"\r\n             id=\"cetypes\"\r\n             type=\"text\"\r\n             placeholder=\"types\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cetypes=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!cetypes.valid && cetypes.touched\">\r\n      Please enter types, comma seperated!\r\n    </span>\r\n      <input name=\"cewiki\"\r\n             id=\"cewiki\"\r\n             type=\"text\"\r\n             placeholder=\"wiki link\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cewiki=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!cewiki.valid && cewiki.touched\">\r\n      Please enter wiki link!\r\n    </span>\r\n      <input name=\"cepicture\"\r\n             id=\"cepicture\"\r\n             type=\"text\"\r\n             placeholder=\"picture url\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cepicture=\"ngModel\"/>\r\n      <label for=\"cestart\">Starts:</label>\r\n      <input name=\"cestart\"\r\n             id=\"cestart\"\r\n             type=\"date\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #cestart=\"ngModel\"/>\r\n      <label for=\"ceend\">Ends:</label>\r\n      <input name=\"ceend\"\r\n             id=\"ceend\"\r\n             type=\"date\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #ceend=\"ngModel\"/>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Pub'\">\r\n      <input name=\"pubname\"\r\n             id=\"pubname\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #pubname=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!pubname.valid && pubname.touched\">\r\n      Please enter name!\r\n    </span>\r\n\r\n\r\n      <input name=\"pubauthors\"\r\n             id=\"pubauthors\"\r\n             type=\"text\"\r\n             placeholder=\"authors\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #pubauthors=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!pubauthors.valid && pubauthors.touched\">\r\n      Please enter authors, comma seperated!\r\n    </span>\r\n      <input name=\"pubtags\"\r\n             id=\"pubtags\"\r\n             type=\"text\"\r\n             placeholder=\"tags\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #pubtags=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!pubtags.valid && pubtags.touched\">\r\n      Please enter tags, comma seperated!\r\n    </span>\r\n      <input name=\"publink\"\r\n             id=\"publink\"\r\n             type=\"text\"\r\n             placeholder=\"link\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #publink=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!publink.valid && publink.touched\">\r\n      Please enter link!\r\n    </span>\r\n      <input name=\"pubabstract\"\r\n             id=\"pubabstract\"\r\n             type=\"text\"\r\n             placeholder=\"link\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #pubabstract=\"ngModel\"/>\r\n\r\n      <span class=\"help-block\" *ngIf=\"!pubabstract.valid && pubabstract.touched\">\r\n      Please enter abstract!\r\n    </span>\r\n      <label for=\"pubdate\">Publish Date:</label>\r\n      <input name=\"pubdate\"\r\n             id=\"pubdate\"\r\n             type=\"date\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #pubdate=\"ngModel\"/>\r\n    </div>\r\n    <div *ngSwitchDefault=\"\">\r\n      Select a type of object to create\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-default\" (click)=\"create()\">Create</button>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-object/create-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pub_service_client__ = __webpack_require__("../../../../../src/app/services/pub.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateObjectComponent = (function () {
    function CreateObjectComponent(pubService, ceService, cbService, router, userService, sharedService) {
        this.pubService = pubService;
        this.ceService = ceService;
        this.cbService = cbService;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.types = ['User', 'Celestial Body', 'Celestial Event', 'Publication'];
        this.user = {
            username: '', password: '', email: '', firstName: '',
            lastName: '', DOB: '', phone: '', picture: '', userType: ''
        };
        this.cb = { name: '', region: '', types: [], wiki: '', picture: '' };
        this.ce = { name: '', region: '', types: [], wiki: '', picture: '', start: '', end: '' };
        this.pub = { name: '', authors: [], link: '', abstract: '', tags: [], pubDate: '' };
    }
    CreateObjectComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.loggedInUserType = this.sharedService.user['userType'];
    };
    CreateObjectComponent.prototype.create = function () {
        var _this = this;
        if (this.objType === 'User') {
            this.user.username = this.createForm.value.username;
            this.user.password = this.createForm.value.password;
            this.user.email = this.createForm.value.email;
            this.user.firstName = this.createForm.value.firstName;
            this.user.lastName = this.createForm.value.lastName;
            this.user.DOB = this.createForm.value.DOB;
            this.user.phone = this.createForm.value.phone;
            this.user.picture = 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg';
            this.user.userType = this.userType;
            this.userService.findUserByUsername(this.user.username)
                .subscribe(function (usr) {
                if (usr !== null) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'User already exists!';
                }
                else {
                    _this.userService.register(_this.user, _this.user.password).subscribe(function (user) {
                        alert('User created!');
                    });
                }
            });
        }
        else if (this.objType === 'Cb') {
            this.cb.name = this.createForm.value.cbname;
            this.cb.region = this.createForm.value.region;
            this.cb.types = this.createForm.value.types.split(',');
            this.cb.wiki = this.createForm.value.wiki;
            this.cb.picture = this.createForm.value.picture;
            this.cbService.findCBbyText(this.cb.name)
                .subscribe(function (cb) {
                if (cb.length !== 0) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'Celestial body already exists!';
                }
                else {
                    _this.cbService.createCB(_this.cb).subscribe(function (cb) {
                        alert('Celestial Body created!');
                    });
                }
            });
        }
        else if (this.objType === 'Ce') {
            this.ce.name = this.createForm.value.cename;
            this.ce.region = this.createForm.value.ceregion;
            this.ce.types = this.createForm.value.cetypes.split(',');
            this.ce.wiki = this.createForm.value.cewiki;
            this.ce.picture = this.createForm.value.cepicture;
            this.ce.start = this.createForm.value.cestart;
            this.ce.end = this.createForm.value.ceend;
            this.ceService.findCEbyText(this.ce.name)
                .subscribe(function (ce) {
                if (ce.length !== 0) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'Celestial Event Already Exists!';
                }
                else {
                    _this.ceService.createCE(_this.ce).subscribe(function (ce) {
                        alert('Celestial Event created!');
                    });
                }
            });
        }
        else if (this.objType === 'Pub') {
            this.pub.name = this.createForm.value.pubname;
            this.pub.authors = this.createForm.value.pubauthors.split(',');
            this.pub.tags = this.createForm.value.pubtags.split(',');
            this.pub.abstract = this.createForm.value.pubabstract;
            this.pub.link = this.createForm.value.publink;
            this.pub.pubDate = this.createForm.value.pubdate;
            this.pubService.createPub(this.pub).subscribe(function (pub) {
                alert('Publication created!');
            });
        }
        else {
        }
    };
    return CreateObjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CreateObjectComponent.prototype, "createForm", void 0);
CreateObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-object',
        template: __webpack_require__("../../../../../src/app/components/create-object/create-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-object/create-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_pub_service_client__["a" /* PubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_pub_service_client__["a" /* PubService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__["a" /* CEService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__["a" /* CBService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _g || Object])
], CreateObjectComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".moh-padding {\r\n  margin: 100px\r\n\r\n}\r\n\r\n.whiteText {\r\n  color: white;\r\n}\r\n\r\n.mh-roundedCorners {\r\n  border-radius: 25px;\r\n  border: 2px solid #ffffff;\r\n  padding: 20px;\r\n  padding-top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-space-banner-default></app-space-banner-default>-->\r\n\r\n\r\n<div class = \"container-fluid\">\r\n  <H2 class=\"whiteText\">Create Post</H2>\r\n  <!--<label>Original Poster</label>-->\r\n  <!--<div class = \"form-control\">{{usernameOfPoster}}</div>-->\r\n  <label class=\"whiteText\">Text</label>\r\n  <input class=\"form-control\"\r\n         type=\"text\"\r\n         id=\"text\"\r\n         placeholder=\"Text regarding post\"\r\n         [(ngModel)] =\"text\" name =\"text\">\r\n  <!--<label>Images</label>-->\r\n  <!--<input type=\"url\"-->\r\n         <!--class='form-control'-->\r\n         <!--placeholder=\"https://res.cloudinary.com/demo/image/upload/sample.jpg\"-->\r\n         <!--[(ngModel)] = \"url\" name = \"url\">-->\r\n  <!--<label>Width</label>-->\r\n  <!--<input type=\"text\" class=\"form-control\"-->\r\n         <!--placeholder=\"1-100%\"-->\r\n         <!--id = \"width\"-->\r\n         <!--[(ngModel)] = \"width\" name = \"width\">-->\r\n  <label class=\"whiteText\">Tags</label>\r\n  <input type=\"text\" class = \"form-control\" id = \"tag\" placeholder=\"Submit tags here\"\r\n         [(ngModel)] = \"tag\" name = \"tag\">\r\n  <div *ngFor=\"let aTag of tags\" class=\"whiteText\">\r\n    {{aTag}}\r\n  </div>\r\n  <!--<label>Upload</label>-->\r\n  <!--<form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">-->\r\n  <!--<input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>-->\r\n  <!--<input  name=\"widgetId\" value=\"{{widgetID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"websiteId\" value=\"{{websiteID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"pageId\" value=\"{{pageID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"userId\" value=\"{{userID}}\"   style=\"display: none\"/>-->\r\n  <!--<button type=\"submit\" class=\"btn btn-block btn-primary\"-->\r\n  <!--(click)=\"updateWidgetImage(widgetID, text, width, url)\">Upload Image</button>-->\r\n  <!--<br/>-->\r\n  <!--</form>-->\r\n  <a class = \"btn btn-success\" (click)=\"createThisPost()\">Create Post</a>\r\n  <button (click)=\"addTag()\" class=\"btn btn-primary\" type=\"button\" id=\"submit\">Add Tag</button>\r\n  <a class=\"btn btn-danger\"\r\n     (click)=\"deleteThisPost(postId)\">Cancel</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreatePostComponent = (function () {
    function CreatePostComponent(postService, userService, route, router, sharedService, cbService, ceService) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.cbService = cbService;
        this.ceService = ceService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.posterId = params['uid'];
        });
        this.user = this.sharedService.user;
        this.usernameOfPoster = this.user.username;
        this.tags = [];
    };
    CreatePostComponent.prototype.deleteThisPost = function (ID) {
        var _this = this;
        this.postService.deletePost(this.postId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.posterId]);
        });
        this.text = null;
    };
    CreatePostComponent.prototype.addTag = function () {
        var _this = this;
        this.userService.findUserByUsername(this.tag)
            .subscribe(function (user) {
            if (user) {
                _this.tags.push(_this.tag);
                _this.tag = null;
            }
            else {
                _this.cbService.findCBbyText(_this.tag)
                    .subscribe(function (cb) {
                    if (cb.length > 0) {
                        _this.tags.push(_this.tag);
                        _this.tag = null;
                    }
                    else {
                        _this.ceService.findCEbyText(_this.tag)
                            .subscribe(function (ce) {
                            if (ce.length > 0) {
                                _this.tags.push(_this.tag);
                                _this.tag = null;
                            }
                            else {
                                alert('tag not valid');
                                _this.tag = null;
                            }
                        });
                    }
                });
            }
        });
    };
    CreatePostComponent.prototype.createThisPost = function () {
        this.tags.push(this.usernameOfPoster);
        var newPost = { poster: this.posterId, text: this.text, likes: 0,
            date: new Date(), images: [this.url], tags: this.tags };
        this.postService.createPost(newPost)
            .subscribe(function (posts) {
        });
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-post',
        template: __webpack_require__("../../../../../src/app/components/create-post/create-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-post/create-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__["a" /* CBService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_ce_service_client__["a" /* CEService */]) === "function" && _g || Object])
], CreatePostComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jj-body\">\r\n  <form>\r\n    <div>\r\n      <input name=\"cbName\"\r\n             id=\"cbName\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"cbName\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!cbname.valid && cbname.touched\">-->\r\n      <!--Please enter name!-->\r\n      <!--</span>-->\r\n\r\n\r\n      <input name=\"region\"\r\n             id=\"cbRegion\"\r\n             type=\"text\"\r\n             placeholder=\"cbRegion\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"cbRegion\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!region.valid && region.touched\">-->\r\n      <!--Please enter region!-->\r\n      <!--</span>-->\r\n      <input name=\"cbTypes\"\r\n             id=\"cbTypes\"\r\n             type=\"text\"\r\n             placeholder=\"types\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"cbTypes\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!types.valid && types.touched\">-->\r\n      <!--Please enter types, comma seperated!-->\r\n      <!--</span>-->\r\n      <input name=\"cbWikiLink\"\r\n             id=\"cbWikiLink\"\r\n             type=\"text\"\r\n             placeholder=\"wiki link\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"cbWikiLink\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!wiki.valid && wiki.touched\">-->\r\n      <!--Please enter wiki link!-->\r\n      <!--</span>-->\r\n      <input name=\"cbPictureURL\"\r\n             id=\"cbPictureURL\"\r\n             type=\"text\"\r\n             placeholder=\"picture url\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"cbPictureURL\"/>\r\n      <button class=\"btn btn-success btn-block jj-button-hover\"\r\n              aria-pressed=\"true\"\r\n              (click)=\"commit(cbName, cbRegion, cbTypes, cbWikiLink, cbPictureURL)\">\r\n        Submit Changes\r\n      </button>\r\n      <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n              aria-pressed=\"true\"\r\n              (click)=\"deletecb()\">\r\n        Delete Account\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCelestialBodyObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCelestialBodyObjectComponent = (function () {
    function EditCelestialBodyObjectComponent(cbService, router, activatedRoute, sharedService) {
        this.cbService = cbService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.cb = {};
        this.cbTypes = [];
    }
    EditCelestialBodyObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.cbId = params['objId'];
        });
        this.cbService.findCBbyId(this.cbId)
            .subscribe(function (cb) {
            _this.cb = cb;
            _this.cbName = cb['name'];
            _this.cbRegion = cb['region'];
            _this.cbTypes = cb['types'];
            _this.cbWikiLink = cb['wiki'];
            _this.cbPictureURL = cb['picture'];
        });
    };
    EditCelestialBodyObjectComponent.prototype.deletecb = function () {
        var _this = this;
        this.cbService.deleteCB(this.cbId)
            .subscribe(function (status) {
            _this.router.navigate(['user/' + _this.sharedService.user['_id']]);
        });
    };
    EditCelestialBodyObjectComponent.prototype.commit = function (name, region, types, wiki, picture) {
        var _this = this;
        var cb = { name: name, region: region, types: types, wiki: wiki, picture: picture };
        this.cbService.updateCB(this.cbId, cb)
            .subscribe(function (status) {
            _this.router.navigate(['cb/' + _this.cbId]);
        });
    };
    return EditCelestialBodyObjectComponent;
}());
EditCelestialBodyObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-celestial-body-object',
        template: __webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cb_service_client__["a" /* CBService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], EditCelestialBodyObjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-celestial-body-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jj-body\">\r\n  <form>\r\n    <div >\r\n      <input name=\"name\"\r\n             id=\"name\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"name\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!cbname.valid && cbname.touched\">-->\r\n      <!--Please enter name!-->\r\n      <!--</span>-->\r\n\r\n\r\n      <input name=\"region\"\r\n             id=\"region\"\r\n             type=\"text\"\r\n             placeholder=\"region\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"region\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!region.valid && region.touched\">-->\r\n      <!--Please enter region!-->\r\n      <!--</span>-->\r\n      <input name=\"types\"\r\n             id=\"types\"\r\n             type=\"text\"\r\n             placeholder=\"types\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"types\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!types.valid && types.touched\">-->\r\n      <!--Please enter types, comma seperated!-->\r\n      <!--</span>-->\r\n      <input name=\"cbWikiLink\"\r\n             id=\"cbWikiLink\"\r\n             type=\"text\"\r\n             placeholder=\"wiki link\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"wiki\"/>\r\n\r\n      <!--<span class=\"help-block\" *ngIf=\"!wiki.valid && wiki.touched\">-->\r\n      <!--Please enter wiki link!-->\r\n      <!--</span>-->\r\n      <input name=\"picture\"\r\n             id=\"picture\"\r\n             type=\"text\"\r\n             placeholder=\"picture url\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"picture\"/>\r\n\r\n      <input name=\"start\"\r\n             id=\"start\"\r\n             type=\"date\"\r\n             placeholder=\"start\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"start\"/>\r\n\r\n      <input name=\"end\"\r\n             id=\"end\"\r\n             type=\"date\"\r\n             placeholder=\"end\"\r\n             class=\"form-control\"\r\n             [(ngModel)]=\"end\"/>\r\n\r\n      <button class=\"btn btn-success btn-block jj-button-hover\"\r\n              aria-pressed=\"true\"\r\n              (click)=\"commit(name, region, types, wiki, picture, start, end)\">\r\n        Submit Changes\r\n      </button>\r\n      <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n              aria-pressed=\"true\"\r\n              (click)=\"deletecb()\">\r\n        Delete Account\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCelestialEventObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCelestialEventObjectComponent = (function () {
    function EditCelestialEventObjectComponent(ceService, router, activatedRoute, sharedService) {
        this.ceService = ceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.types = [];
        this.ce = {};
    }
    EditCelestialEventObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.ceId = params['objId'];
        });
        this.ceService.findCEbyId(this.ceId)
            .subscribe(function (ce) {
            _this.ce = ce;
            _this.name = ce['name'];
            _this.region = ce['region'];
            _this.types = ce['types'];
            _this.wiki = ce['wiki'];
            _this.picture = ce['picture'];
            _this.start = ce['start'];
            _this.end = ce['end'];
        });
    };
    EditCelestialEventObjectComponent.prototype.deletecb = function () {
        var _this = this;
        this.ceService.deleteCE(this.ceId)
            .subscribe(function (status) {
            _this.router.navigate(['user/' + _this.sharedService.user['_id']]);
        });
    };
    EditCelestialEventObjectComponent.prototype.commit = function (name, region, types, wiki, picture, start, end) {
        var _this = this;
        var ce = { name: name, region: region, types: types, wiki: wiki, picture: picture, start: start, end: end };
        this.ceService.updateCE(this.ceId, ce)
            .subscribe(function (status) {
            _this.router.navigate(['ce/' + _this.ceId]);
        });
    };
    return EditCelestialEventObjectComponent;
}());
EditCelestialEventObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-celestial-event-object',
        template: __webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ce_service_client__["a" /* CEService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], EditCelestialEventObjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-celestial-event-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-object.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"objectType\">\r\n\r\n  <div *ngSwitchCase=\"'User'\">\r\n    <app-edit-user-object></app-edit-user-object>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'Celestial Body'\">\r\n    <app-edit-celestial-body-object></app-edit-celestial-body-object>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'Celestial Event'\">\r\n    <app-edit-celestial-event-object></app-edit-celestial-event-object>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'Publication'\">\r\n    <app-edit-publication-object></app-edit-publication-object>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pub_service_client__ = __webpack_require__("../../../../../src/app/services/pub.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditObjectComponent = (function () {
    function EditObjectComponent(userService, cbService, ceService, pubService, router, activatedRoute) {
        this.userService = userService;
        this.cbService = cbService;
        this.ceService = ceService;
        this.pubService = pubService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    EditObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.objectId = params['objId'];
        });
        if (this.userService.findUserById(this.objectId) !== null) {
            this.objectType = 'User';
        }
        else if (this.cbService.findCBbyId(this.objectId) !== null) {
            this.objectType = 'Celestial Body';
        }
        else if (this.ceService.findCEbyId(this.objectId) !== null) {
            this.objectType = 'Celestial Event';
        }
        else if (this.pubService.findPubbyId(this.objectId) !== null) {
            this.objectType = 'Publication';
        }
    };
    return EditObjectComponent;
}());
EditObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-object',
        template: __webpack_require__("../../../../../src/app/components/edit-object/edit-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-object/edit-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_ce_service_client__["a" /* CEService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_pub_service_client__["a" /* PubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_pub_service_client__["a" /* PubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], EditObjectComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jj-body\">\r\n  <form #f=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n      <input [(ngModel)]=\"name\"\r\n             name=\"name\"\r\n             id=\"name\"\r\n             type=\"text\"\r\n             placeholder=\"name\"\r\n             class=\"form-control\"/>\r\n      <label for=\"authors\">\r\n        Authors\r\n      </label>\r\n      <input [(ngModel)]=\"authors\"\r\n             name=\"authors\"\r\n             id=\"authors\"\r\n             type=\"text\"\r\n             placeholder=\"authors\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"tags\">\r\n        Tags\r\n      </label>\r\n      <input [(ngModel)]=\"tags\"\r\n             name=\"tags\"\r\n             id=\"tags\"\r\n             type=\"text\"\r\n             placeholder=\"tags\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"link\">\r\n        Link\r\n      </label>\r\n      <input [(ngModel)]=\"link\"\r\n             name=\"link\"\r\n             id=\"link\"\r\n             type=\"url\"\r\n             placeholder=\"link\"\r\n             class=\"form-control\"/>\r\n      <label for=\"abstract\">\r\n        Abstract\r\n      </label>\r\n      <input [(ngModel)]=\"abstract\"\r\n             name=\"abstract\"\r\n             id=\"abstract\"\r\n             type=\"url\"\r\n             placeholder=\"abstract\"\r\n             class=\"form-control\"/>\r\n      <label for=\"pubDate\">\r\n        Publication Date\r\n      </label>\r\n      <input [(ngModel)]=\"pubDate\"\r\n             name=\"pubDate\"\r\n             id=\"pubDate\"\r\n             type=\"date\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n  </form>\r\n  <button class=\"btn btn-success btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"commit(name, authors, tags, link, abstract, pubDate)\">\r\n    Submit Changes\r\n  </button>\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"deletePub()\">\r\n    Delete Publication\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPublicationObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pub_service_client__ = __webpack_require__("../../../../../src/app/services/pub.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPublicationObjectComponent = (function () {
    function EditPublicationObjectComponent(pubService, router, activatedRoute, sharedService) {
        this.pubService = pubService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.pub = {};
    }
    EditPublicationObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pubId = params['objId'];
        });
        this.pubService.findPubbyId(this.pubId)
            .subscribe(function (pub) {
            _this.pub = pub;
            _this.name = pub['name'];
            _this.authors = pub['authors'];
            _this.tags = pub['tags'];
            _this.link = pub['link'];
            _this.abstract = pub['abstract'];
            _this.pubDate = pub['pubDate'];
        });
    };
    EditPublicationObjectComponent.prototype.commit = function (name, authors, tags, link, abstract, pubDate) {
        var _this = this;
        var pub = { name: name, authors: [authors], tags: [tags], link: link, abstract: abstract, pubDate: pubDate };
        this.pubService.updatePub(this.pubId, pub)
            .subscribe(function (status) {
            _this.router.navigate(['user/' + _this.sharedService.user['_id']]);
        });
    };
    EditPublicationObjectComponent.prototype.deletePub = function () {
        var _this = this;
        this.pubService.deletePub(this.pubId)
            .subscribe(function (status) {
            _this.router.navigate(['user/' + _this.sharedService.user['_id']]);
        });
    };
    return EditPublicationObjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], EditPublicationObjectComponent.prototype, "editPublication", void 0);
EditPublicationObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-publication-object',
        template: __webpack_require__("../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-object/edit-publication-object/edit-publication-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_pub_service_client__["a" /* PubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pub_service_client__["a" /* PubService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], EditPublicationObjectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-publication-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n<div class=\"container-fluid jj-font\">\r\n  <form #f=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">\r\n        Username\r\n      </label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             id=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"Username\"\r\n             class=\"form-control\"/>\r\n      <label for=\"email\">\r\n        Email\r\n      </label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             id=\"email\"\r\n             type=\"email\"\r\n             placeholder=\"Email\"\r\n             class=\"form-control\"\r\n             email/>\r\n\r\n      <label for=\"First Name\">\r\n        First Name\r\n      </label>\r\n      <input [(ngModel)]=\"firstName\"\r\n             name=\"First Name\"\r\n             id=\"First Name\"\r\n             type=\"text\"\r\n             placeholder=\"First Name\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"Last Name\">\r\n        Last Name\r\n      </label>\r\n      <input [(ngModel)]=\"lastName\"\r\n             name=\"Last Name\"\r\n             id=\"Last Name\"\r\n             type=\"text\"\r\n             placeholder=\"Last Name\"\r\n             class=\"form-control\"/>\r\n      <label for=\"phone\">\r\n        Phone Number\r\n      </label>\r\n      <input [(ngModel)]=\"phone\"\r\n             name=\"phone\"\r\n             id=\"phone\"\r\n             type=\"tel\"\r\n             placeholder=\"xxx-xxx-xxxx\"\r\n             class=\"form-control\"/>\r\n      <label for=\"DOB\">\r\n        Birthday\r\n      </label>\r\n      <input [(ngModel)]=\"DOB\"\r\n             name=\"DOB\"\r\n             id=\"DOB\"\r\n             type=\"date\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"form-control form-group\">\r\n      <label>Current User Type:</label>\r\n      <div class='radio-inline'>\r\n        {{userType}}\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group form-control\">\r\n      <label>Change User Type:</label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='AMATEUR' [(ngModel)]=\"type\" >Amateur Astronomer\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='PROFESSIONAL' [(ngModel)]=\"type\" >Professional Astronomer\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='ORGANIZATION' [(ngModel)]=\"type\" >Space Organization\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='UNIVERSITY' [(ngModel)]=\"type\" >University\r\n      </label>\r\n    </div>\r\n  </form>\r\n  <button class=\"btn btn-success btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"commit(username, email, firstName, lastName, phone, DOB, type)\">\r\n    Submit Changes\r\n  </button>\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"deleteUser(userId)\">\r\n    Delete Account\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserObjectComponent = (function () {
    function EditUserObjectComponent(userService, router, activateRoute, sharedService) {
        this.userService = userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.sharedService = sharedService;
        this.user = {};
    }
    EditUserObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params
            .subscribe(function (params) {
            _this.userId = params['objId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = user['username'];
            _this.email = user['email'];
            _this.firstName = user['firstName'];
            _this.lastName = user['lastName'];
            _this.DOB = user['DOB'];
            _this.phone = user['phone'];
            _this.userType = user['userType'];
        });
    };
    EditUserObjectComponent.prototype.deleteUser = function (userId) {
        this.userService.deleteUser(userId)
            .subscribe(function (status) {
        });
    };
    EditUserObjectComponent.prototype.commit = function (username, email, firstName, lastName, phone, DOB, type) {
        var _this = this;
        var user = { username: username, email: email, firstName: firstName, lastName: lastName,
            phone: phone, DOB: DOB, userType: type };
        this.userService.updateUser(this.userId, user)
            .subscribe(function (status) {
            var u = _this.sharedService.user;
            _this.router.navigate(['user/' + u['_id']]);
        });
    };
    return EditUserObjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], EditUserObjectComponent.prototype, "editUser", void 0);
EditUserObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-user-object',
        template: __webpack_require__("../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-object/edit-user-object/edit-user-object.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], EditUserObjectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-user-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-pic-body {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/vendors/image/homepageBackground.jpg") + ");\r\n  padding-top: 9em;\r\n  height: 45%;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  /*position: absolute;*/\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.jj-typewriter h1 {\r\n  color: whitesmoke;\r\n  font-family: \"final_frontier_old_styleRg\";\r\n  font-size: 7vw;\r\n  text-shadow: black 2px 2px 4px;\r\n  overflow: hidden;\r\n  border-right: .20em blue;\r\n  white-space: nowrap;\r\n  margin: 0 auto;\r\n  letter-spacing: .15em;\r\n  -webkit-animation:\r\n  typing 3.5s steps(30, end),\r\n  blink-caret .5s step-end infinite;\r\n          animation:\r\n  typing 3.5s steps(30, end),\r\n  blink-caret .5s step-end infinite;\r\n}\r\n\r\n@-webkit-keyframes typing {\r\n  from {width : 0}\r\n  to {width : 100%}\r\n}\r\n\r\n@keyframes typing {\r\n  from {width : 0}\r\n  to {width : 100%}\r\n}\r\n\r\n@-webkit-keyframes blink-caret {\r\n  from, to {border-color: transparent}\r\n  50% {border-color: blue}\r\n}\r\n\r\n@keyframes blink-caret {\r\n  from, to {border-color: transparent}\r\n  50% {border-color: blue}\r\n}\r\n\r\n.dot-red {\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color: red;\r\n  box-shadow: black 2px 2px 4px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot-green {\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color: green;\r\n  box-shadow: black 2px 2px 4px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.jj-text-left {\r\n  text-align: left;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.jj-text-right {\r\n  text-align: right;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.jj-black-text p{\r\n  color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Home page - this will be the landing page of your project. It should look spectacular. -->\r\n<!--I should be proud to share the URL with colleagues. The purpose of the Website should be clear-->\r\n<body>\r\n<div class=\"jj-pic-body\">\r\n  <div class=\"jj-text-left jj-font\">\r\n    logged in\r\n    <div *ngIf=\"loggedIn; then LoggedIn; else notLoggedIn\">\r\n    </div>\r\n    <ng-template #LoggedIn>\r\n      <span class=\"dot-green\"></span>\r\n    </ng-template>\r\n    <ng-template #notLoggedIn>\r\n      <span class=\"dot-red\"></span>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"jj-typewriter\">\r\n    <h1>Welcome To SpaceBook!</h1>\r\n  </div>\r\n  <button class=\"jj-button jj-text-right jj-font\" (click)=\"continueToSpaceBook()\">Continue To SpaceBook</button>\r\n</div>\r\n\r\n<h1> Welcome to SpaceBook, the first social networking site dedicated to the confluence of space enthusiasts.</h1>\r\n\r\n<p>\r\nProviding\r\n  an easy way for collaborations between professional researchers and organizations, SpaceBook is changing the game. It's\r\n also allowing space enthusiasts to share their awesome research amongst their peers.\r\n</p>\r\n\r\n<h4>New to the wonders of space?</h4>\r\n<p>\r\nFeel free to join us and share any cool thoughts, even pictures of celestial events that you take! You can even follow\r\nthe professionals that use SpaceBook...connect with your heroes!\r\n</p>\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = (function () {
    function HomepageComponent(sharedService, activatedRoute, router, userService) {
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.user = {};
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = _this.sharedService.user['_id'];
            _this.userService.loggedIn()
                .subscribe(function (bool) {
                _this.loggedIn = bool;
            });
        });
    };
    HomepageComponent.prototype.continueToSpaceBook = function () {
        if (this.loggedIn) {
            this.router.navigate(['/user/' + this.userId]);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], HomepageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <img src=\"{{item.links['0'].href}}\"/>\r\n  <br>\r\n  {{item.data['0'].description}}\r\n  <br>\r\n  {{stringJson}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaPictureDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaPictureDetailsComponent = (function () {
    function NasaPictureDetailsComponent(nasaService, activatedRoute) {
        this.nasaService = nasaService;
        this.activatedRoute = activatedRoute;
    }
    NasaPictureDetailsComponent.prototype.ngOnInit = function () {
        this.itemId = this.activatedRoute.snapshot.params['imgid'];
        this.item = this.nasaService.requestDetails(this.itemId);
        this.stringJson = JSON.stringify(this.item).replace(',', ',<br>');
    };
    return NasaPictureDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NasaPictureDetailsComponent.prototype, "itemId", void 0);
NasaPictureDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-picture-details',
        template: __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NasaPictureDetailsComponent);

var _a, _b;
//# sourceMappingURL=nasa-picture-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>NASA Img Library Api Test</h1>\r\n\r\n<label>Search Params</label>\r\n<input [(ngModel)]=\"searchParams\" placeholder=\"mars\" class=\"form-control\"/>\r\n<button (click)=\"search(searchParams)\" class=\"btn btn-primary btn-block\">Search</button>\r\n\r\n<div *ngIf=\"gotResult\">\r\n  <div *ngFor=\"let item of result.collection.items; let i = index\">\r\n\r\n    <img src=\"{{item.links['0'].href}}\"/>\r\n\r\n    <p>{{item.data['0'].description}}</p>\r\n\r\n    <a routerLink=\"./{{i}}/details\">More Info</a>\r\n    <br>\r\n    <br>\r\n    <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaPictureTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaPictureTestComponent = (function () {
    function NasaPictureTestComponent(nasaService) {
        this.nasaService = nasaService;
    }
    NasaPictureTestComponent.prototype.search = function (params) {
        var _this = this;
        this.nasaService.searchImg(this.searchParams)
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
        });
    };
    NasaPictureTestComponent.prototype.ngOnInit = function () {
        this.gotResult = false;
    };
    return NasaPictureTestComponent;
}());
NasaPictureTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-picture-test',
        template: __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object])
], NasaPictureTestComponent);

var _a;
//# sourceMappingURL=nasa-picture-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>NASA Api Asteroid Test</h1>\r\n\r\n<label>Asteroid Id</label>\r\n<input [(ngModel)]=\"asteroidId\" placeholder=\"Asteroid Id\" class=\"form-control\"/>\r\n<button (click)=\"searchAsteroid(asteroidId)\" class=\"btn btn-primary btn-block\" type=\"submit\">Search</button>\r\n\r\n<div *ngIf=\"gotResult\">\r\n  <ul>\r\n    <li>Asteroid Name: {{asteroidName}}</li>\r\n    <li>Absolute Magnitutde: {{absolute_magnitude_h}}</li>\r\n    <li><a href=\"{{nasa_jpl_url}}\" target=\"_blank\">Nasa Jet Propulsion Lab Data for: {{asteroidId}}</a></li>\r\n    <li>Is this a potentially hazardous asteroid? Answer: {{is_potentially_hazardous_asteroid}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaTestComponent = (function () {
    function NasaTestComponent(nasaService) {
        this.nasaService = nasaService;
    }
    NasaTestComponent.prototype.searchAsteroid = function (asteroidId) {
        var _this = this;
        this.nasaService.searchAsteroid(asteroidId)
            .subscribe(function (result) {
            _this.asteroidId = asteroidId;
            _this.result = result;
            _this.gotResult = true;
            _this.asteroidName = result.name;
            _this.absolute_magnitude_h = result.absolute_magnitude_h;
            _this.estimated_diameter = result.estimated_diameter;
            _this.nasa_jpl_url = result.nasa_jpl_url;
            _this.orbital_data = result.orbital_data;
            _this.close_approach_data = result.close_approach_data;
            _this.is_potentially_hazardous_asteroid = result.is_potentially_hazardous_asteroid;
            console.log(result);
            console.log(_this.orbital_data);
        });
        console.log(this.asteroidId);
    };
    NasaTestComponent.prototype.ngOnInit = function () {
        this.gotResult = false;
    };
    return NasaTestComponent;
}());
NasaTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-test',
        template: __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object])
], NasaTestComponent);

var _a;
//# sourceMappingURL=nasa-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/picture/picture-new/picture-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mh-h1 {\r\n  margin-top: 0px;\r\n  font-size: 230%;\r\n  text-align: center;\r\n}\r\n\r\n.jj-form {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture/picture-new/picture-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"mb-search-result-box\">\r\n<h6 class=\"mh-h1\">Add New Picture</h6>\r\n\r\n<div class=\"jj-form\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">\r\n        Title\r\n      </label>\r\n      <input [(ngModel)]=\"title\"\r\n        name=\"title\"\r\n              id=\"title\"\r\n      type=\"text\"\r\n      placeholder=\"Pluto\"\r\n      class=\"form-control\"\r\n      required\r\n      />\r\n      <!--<span class=\"help-block\" *ngIf=\"title.touched && !title.valid\"@TODO>-->\r\n        <!--Please enter a picture title!-->\r\n      <!--</span>-->\r\n      <label for=\"text\">\r\n        Text\r\n      </label>\r\n      <textarea\r\n        [(ngModel)]=\"text\"\r\n        placeholder=\"Dwarf Planet\"\r\n        rows=\"5\"\r\n        name=\"text\"\r\n        id=\"text\"\r\n        class=\"form-control\"\r\n        required></textarea>\r\n      <!--<span class=\"help-block\" *ngIf=\"text.touched && !text.valid\"@TODO>-->\r\n      <!--Please enter a description for this picture!-->\r\n      <!--</span>-->\r\n      <label for=\"url\">\r\n      URL\r\n      </label>\r\n      <input [(ngModel)]=\"url\"\r\n      type=\"url\"\r\n      placeholder=\"URL\"\r\n      name=\"url\"\r\n      id=\"url\"\r\n      class=\"form-control\"/>\r\n      <label for=\"width\">\r\n      Width\r\n      </label>\r\n      <input\r\n      [(ngModel)]=\"width\"\r\n      name=\"width\"\r\n      id=\"width\"\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      placeholder=\"0-100%\"\r\n      />\r\n      <form ngNoForm action=\"{{baseURL}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\r\n        <input name=\"myFile\" type=\"file\" class=\"form-control\"/>\r\n        <input name=\"originalname\" type=\"text\" value=\"{{text}}\" style=\"display: none\"/>\r\n        <input name=\"pictureId\" type=\"text\" value=\"{{picId}}\" style=\"display: none\"/>\r\n        <input name=\"albumId\" type=\"text\" value=\"{{albumId}}\" style=\"display: none\"/>\r\n        <input name=\"userId\" type=\"text\" value = \"{{userId}}\" style=\"display: none\"/>\r\n        <input name=\"width1\" type=\"any\" value=\"{{width}}\" style=\"display: none\"/>\r\n        <button type=\"submit\" class=\"btn btn-block btn-primary jj-button-hover\"\r\n                aria-pressed=\"true\">Upload Image (Only for uploads)</button>\r\n        <br/>\r\n      </form>\r\n      <button class = \"btn btn-block btn-success jj-button-hover\"(click)=\"commit(text, title, width, url)\">SubmitTraditionally</button>\r\n      <button (click)=\"cancel()\" class=\"btn btn-danger btn-block jj-button-hover\"\r\n              aria-pressed=\"true\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/picture/picture-new/picture-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__ = __webpack_require__("../../../../../src/app/services/picture.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PictureNewComponent = (function () {
    function PictureNewComponent(pictureService, router, activatedRoute) {
        this.pictureService = pictureService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pic = {};
        this.pictures = [];
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    PictureNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.albumId = params['aid'];
            _this.dateCreated = new Date;
        });
        this.pictureService.findPicturesByAlbum(this.albumId)
            .subscribe(function (pictures) {
            _this.pictures = pictures;
        });
    };
    PictureNewComponent.prototype.commit = function (text, title, width, url) {
        var _this = this;
        this.pic = { text: text, title: title, width: width, url: url, dateUploaded: this.dateCreated, albumId: this.albumId };
        this.pictureService.createPicture(this.albumId, this.pic)
            .subscribe(function (album) {
            _this.router.navigate(['user/' + _this.userId + '/album/' + _this.albumId]);
        });
    };
    PictureNewComponent.prototype.cancel = function () {
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
    };
    return PictureNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */]) === "function" && _a || Object)
], PictureNewComponent.prototype, "newPictureForm", void 0);
PictureNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-picture-new',
        template: __webpack_require__("../../../../../src/app/components/picture/picture-new/picture-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/picture/picture-new/picture-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_picture_service_client__["a" /* PictureServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PictureNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=picture-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/picture/user-pictures/user-pictures.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture/user-pictures/user-pictures.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">\r\n        Title\r\n      </label>\r\n      <input [(ngModel)]=\"title\"\r\n             name=\"title\"\r\n             id=\"title\"\r\n             type=\"text\"\r\n             placeholder=\"Pluto\"\r\n             class=\"form-control\"\r\n             required\r\n      />\r\n      <!--<span class=\"help-block\" *ngIf=\"title.touched && !title.valid\"@TODO>-->\r\n        <!--Please enter a picture title!-->\r\n      <!--</span>-->\r\n      <label for=\"text\">\r\n        Text\r\n      </label>\r\n      <textarea\r\n        [(ngModel)]=\"text\"\r\n        placeholder=\"Dwarf Planet\"\r\n        rows=\"5\"\r\n        name=\"text\"\r\n        id=\"text\"\r\n        class=\"form-control\"\r\n        required></textarea>\r\n      <!--<span class=\"help-block\" *ngIf=\"text.touched && !text.valid\"@TODO>-->\r\n        <!--Please enter a description for this picture!-->\r\n      <!--</span>-->\r\n      <label for=\"url\">\r\n        URL\r\n      </label>\r\n      <input [(ngModel)]=\"url\"\r\n             type=\"url\"\r\n             placeholder=\"URL\"\r\n             name=\"url\"\r\n             id=\"url\"\r\n             class=\"form-control\"/>\r\n      <label for=\"width\">\r\n        Width\r\n      </label>\r\n      <input\r\n        [(ngModel)]=\"width\"\r\n        name=\"width\"\r\n        id=\"width\"\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n      />\r\n      <button (click)=\"commit(picId, text, title, url, width)\" aria-pressed=\"true\" class=\"btn btn-success btn-block jj-button-hover\">\r\n        Commit\r\n      </button>\r\n      <button (click)=\"goBackToAlbum()\" class=\"btn btn-primary btn-block jj-button-hover\"\r\n              aria-pressed=\"true\">Cancel Changes</button>\r\n      <button (click)=\"deleted(picId)\" class=\"btn btn-danger btn-block jj-button-hover\"\r\n              aria-pressed=\"true\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/picture/user-pictures/user-pictures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPicturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_picture_service_client__ = __webpack_require__("../../../../../src/app/services/picture.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPicturesComponent = (function () {
    function UserPicturesComponent(pictureService, activatedRoute, router) {
        this.pictureService = pictureService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.picture = {};
        this.pictures = [];
    }
    UserPicturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.albumId = params['aid'];
            _this.picId = params['picid'];
            _this.userId = params['uid'];
        });
        this.pictureService.findPictureById(this.picId)
            .subscribe(function (picture) {
            _this.picture = picture;
            _this.title = _this.picture['title'];
            _this.text = _this.picture['text'];
            _this.width = _this.picture['width'];
            _this.url = _this.picture['url'];
        });
        this.pictureService.findPicturesByAlbum(this.albumId)
            .subscribe(function (pictures) {
            _this.pictures = pictures;
        });
    };
    UserPicturesComponent.prototype.commit = function (picId, text, title, url, width) {
        var _this = this;
        this.picture = { _id: picId, albumId: this.albumId, text: text, title: title, url: url, width: width };
        this.pictureService.updatePicture(picId, this.picture)
            .subscribe(function (pic) {
            _this.picture = pic;
            _this.title = pic['title'];
            _this.text = pic['text'];
            _this.width = pic['width'];
            _this.url = pic['url'];
            _this.router.navigate(['user/' + _this.userId + '/album/' + _this.albumId]);
        });
    };
    UserPicturesComponent.prototype.goBackToAlbum = function () {
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
    };
    UserPicturesComponent.prototype.deleted = function (picId) {
        var _this = this;
        this.pictureService.deletePicture(picId)
            .subscribe(function (pictures) {
            _this.router.navigate(['user/' + _this.userId + '/album/' + _this.albumId]);
        });
    };
    return UserPicturesComponent;
}());
UserPicturesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-pictures',
        template: __webpack_require__("../../../../../src/app/components/picture/user-pictures/user-pictures.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/picture/user-pictures/user-pictures.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_picture_service_client__["a" /* PictureServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_picture_service_client__["a" /* PictureServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserPicturesComponent);

var _a, _b, _c;
//# sourceMappingURL=user-pictures.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let post of posts\" class = 'borderless'>\r\n  <app-post [ID] = \"post._id\">\r\n  </app-post>\r\n</div>\r\n\r\n\r\n<!--<div *ngFor=\"let post of posts\" class = 'borderless'>-->\r\n  <!--<app-post></app-post>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListComponent = (function () {
    function PostListComponent(postService, userService, route, router) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Right now this deletes post. Will have to refactor this to just simply update the post without one's tag later.
     * @param ID
     */
    PostListComponent.prototype.removeMyTag = function (ID) {
        var _this = this;
        this.postService.deletePost(ID)
            .subscribe(function (post) {
            _this.postService.findPostsByUser(_this.IDfromProfile)
                .subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    };
    return PostListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostListComponent.prototype, "IDfromProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], PostListComponent.prototype, "posts", void 0);
PostListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-list',
        template: __webpack_require__("../../../../../src/app/components/post-list/post-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: 175%;\r\n}\r\n\r\n.mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.jj-fontv2 {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n}\r\n\r\n.mh-roundedCorners {\r\n  border-radius: 25px;\r\n  border: 2px solid #ffffff;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moh-btnWidthPlusMarginV2WithFinalFrontierFont {\r\n  margin-top: 6px;\r\n  font-family: final_frontier_old_styleRg;\r\n  min-width: 152px;\r\n  max-width: 168px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"mb-search-result-box mh-roundedCorners\">\r\n  <h4>{{text}}</h4>\r\n  <h3 class = 'jj-font'> Current Altitude: {{likes}} kilometers\r\n    <button class = \"btn btn-primary\" (click)=\"likeThisPost()\">Give More Rocket Fuel</button></h3>\r\n  <label>Tags</label>\r\n  <div *ngFor = \"let aTag of tags\">\r\n    <a class=\"jj-fontv2\" (click)=\"navigateToTag(aTag)\">{{aTag}}</a>\r\n  </div>\r\n  <div *ngIf=\"ifIdEqualPosterId()\">\r\n    <button (click)=\"removeMyTag()\" class = \"btn btn-danger moh-btnWidthPlusMarginV2WithFinalFrontierFont\">\r\n      Remove My Tag</button>\r\n  </div>\r\n  <label>Posted on {{date}}</label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = (function () {
    function PostComponent(postService, sharedService, userService, route, router, ceService, cBService) {
        this.postService = postService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.ceService = ceService;
        this.cBService = cBService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.postService.findPostbyId(this.ID)
            .subscribe(function (post) {
            _this.post = post;
            _this.poster = post.username;
            _this.images = post.images;
            _this.text = post.text;
            _this.tags = post.tags;
            _this.date = post.date;
            _this.likes = post.likes;
        });
    };
    PostComponent.prototype.likeThisPost = function () {
        var _this = this;
        this.post.likes++;
        this.postService.updatePost(this.ID, this.post)
            .subscribe(function (post) {
            _this.ngOnInit();
        });
    };
    PostComponent.prototype.deletePost = function (user) {
        var _this = this;
        if (user === this.post.poster) {
            // SPLICE This stuff
            this.postService.deletePost(this.ID)
                .subscribe(function (post) {
                _this.post = post;
                _this.ngOnInit();
            });
        }
        else {
            alert('You are not the original poster');
        }
    };
    PostComponent.prototype.navigateToTag = function (name) {
        var _this = this;
        this.userService.findUserByUsername(name)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['user/' + user._id]);
            }
            else {
                _this.ceService.findCEbyText(name)
                    .subscribe(function (ce) {
                    if (ce.length > 0) {
                        _this.router.navigate(['ce/', ce[0]._id]);
                    }
                    else {
                        _this.cBService.findCBbyText(name)
                            .subscribe(function (cb) {
                            if (cb.length > 0) {
                                _this.router.navigate(['cb/', cb[0]._id]);
                            }
                        });
                    }
                });
            }
        });
    };
    PostComponent.prototype.ifIdEqualPosterId = function () {
        return (this.userId === this.user._id);
    };
    PostComponent.prototype.removeMyTag = function () {
        var _this = this;
        var postition = this.post.tags.indexOf(this.user.username);
        this.tags.splice(postition, 1);
        this.post.tags = this.tags;
        if (this.tags.length === 0) {
            this.postService.deletePost(this.ID)
                .subscribe(function (posts) {
            });
        }
        else {
            this.postService.updatePost(this.ID, this.post)
                .subscribe(function (post1) {
                _this.post = post1;
                _this.ngOnInit();
            });
        }
    };
    return PostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "ID", void 0);
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ce_service_client__["a" /* CEService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_cb_service_client__["a" /* CBService */]) === "function" && _g || Object])
], PostComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <h2 class=\"jj-font\">{{name}}</h2>\r\n      <a (click)=\"sayHi()\">Say Hi!</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchCbComponent = (function () {
    function SearchCbComponent(activatedRoute, cbService, router, sharedService) {
        this.activatedRoute = activatedRoute;
        this.cbService = cbService;
        this.router = router;
        this.sharedService = sharedService;
    }
    SearchCbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = params['uid'];
        });
        this.picture = this.cb.picture;
        this.name = this.cb.name;
        this.cbId = this.cb._id;
        this.errorFlag = false;
    };
    SearchCbComponent.prototype.sayHi = function () {
        if (this.user.username) {
            this.router.navigate(['cb/', this.cbId]);
        }
        else {
            var wishToLogin = window.confirm('You must sign in to view this page! Would you like to sign in?');
            if (wishToLogin === true) {
                this.router.navigate(['login']);
            }
        }
    };
    return SearchCbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchCbComponent.prototype, "cb", void 0);
SearchCbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-cb',
        template: __webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], SearchCbComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-cb.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-ce/search-ce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-ce/search-ce.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <h2 class=\"jj-font\">{{name}}</h2>\r\n      <a (click)=\"sayHi()\">Check Me Out!</a>\r\n      <br>\r\n      <b>Starts:</b> {{ce.start}}\r\n      <br>\r\n      <b>Ends:</b> {{ce.end}}\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-ce/search-ce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchCeComponent = (function () {
    function SearchCeComponent(activatedRoute, ceService, router, sharedService) {
        this.activatedRoute = activatedRoute;
        this.ceService = ceService;
        this.router = router;
        this.sharedService = sharedService;
    }
    SearchCeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = params['uid'];
        });
        this.picture = this.ce.picture;
        this.name = this.ce.name;
        this.ceId = this.ce._id;
        this.errorFlag = false;
    };
    SearchCeComponent.prototype.sayHi = function () {
        if (this.user.username) {
            this.router.navigate(['ce/', this.ceId]);
        }
        else {
            var wishToLogin = window.confirm('You must sign in to view this page! Would you like to sign in?');
            if (wishToLogin === true) {
                this.router.navigate(['login']);
            }
        }
    };
    return SearchCeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchCeComponent.prototype, "ce", void 0);
SearchCeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-ce',
        template: __webpack_require__("../../../../../src/app/components/search/search-ce/search-ce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-ce/search-ce.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ce_service_client__["a" /* CEService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], SearchCeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-ce.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <b>Description:</b>\r\n  <br>\r\n  {{description}}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNasaDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchNasaDetailComponent = (function () {
    function SearchNasaDetailComponent() {
    }
    SearchNasaDetailComponent.prototype.ngOnInit = function () {
        this.stringify = JSON.stringify(this.obj).replace(',', ',<br>');
        this.description = this.obj.data['0'].description;
    };
    return SearchNasaDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchNasaDetailComponent.prototype, "obj", void 0);
SearchNasaDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-nasa-detail',
        template: __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa-detail/search-nasa-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchNasaDetailComponent);

//# sourceMappingURL=search-nasa-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-5\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-7 pull-left\">\r\n      <h2 class=\"jj-font\">{{title}}</h2>\r\n      <p>{{description}}</p>\r\n      <p>{{date}}</p>\r\n      <button (click)=\"showDetails()\">More Details</button>\r\n      <div *ngIf=\"details\">\r\n        <app-search-nasa-detail [obj]=\"nasaObject\"></app-search-nasa-detail>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNasaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchNasaComponent = (function () {
    function SearchNasaComponent() {
        this.details = false;
    }
    SearchNasaComponent.prototype.ngOnInit = function () {
        this.description = this.nasaObject.data['0'].description;
        if (this.description.length > 140) {
            this.description = this.description.slice(0, 140);
            this.description += '...';
        }
        this.picture = this.nasaObject.links['0'].href;
        this.title = this.nasaObject.data['0'].title;
        this.date = this.nasaObject.data['0'].date_created;
    };
    SearchNasaComponent.prototype.showDetails = function () {
        if (this.details === true) {
            this.details = false;
        }
        else {
            this.details = true;
        }
    };
    return SearchNasaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchNasaComponent.prototype, "nasaObject", void 0);
SearchNasaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-nasa',
        template: __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchNasaComponent);

//# sourceMappingURL=search-nasa.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n      <img src=\"{{profilePic}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    <h2 class=\"jj-font\">{{username}}</h2>\r\n      <a (click)=\"sayHi()\">Say Hi!</a>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n    <button (click)=\"addToFollow(userId)\" class=\"jj-button pull-right\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchProfileComponent = (function () {
    function SearchProfileComponent(sharedService, activatedRoute, userService, router) {
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }
    SearchProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = _this.sharedService.user['_id'];
        });
        this.profilePic = this.user.picture;
        this.username = this.user.username;
        this.userId = this.user._id;
        this.errorFlag = false;
        this.user = this.sharedService.user;
    };
    SearchProfileComponent.prototype.addToFollow = function (userId) {
        var _this = this;
        if (userId === this.originalUserId) {
            this.errorFlag = true;
            this.errorMessage = 'You cannot follow yourself!';
        }
        else {
            if (this.sharedService.user['follows'].includes(userId)) {
                this.errorFlag = true;
                this.errorMessage = 'You already follow this user.';
            }
            else {
                this.sharedService.user['follows'].push(userId);
                this.userService.updateUser(this.originalUserId, this.sharedService.user)
                    .subscribe(function (usr) {
                    _this.sharedService.user = usr;
                    _this.router.navigate(['user/' + _this.originalUserId]);
                });
            }
        }
    };
    SearchProfileComponent.prototype.sayHi = function () {
        if (this.user.username) {
            this.router.navigate(['user/', this.userId]);
        }
        else {
            var wishToLogin = window.confirm('You must sign in to view this page! Would you like to sign in?');
            if (wishToLogin === true) {
                this.router.navigate(['login']);
            }
        }
    };
    return SearchProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchProfileComponent.prototype, "user", void 0);
SearchProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-profile',
        template: __webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SearchProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-pub/search-pub.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-pub/search-pub.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <h2 class=\"jj-font\">{{name}}</h2>\r\n      <a href=\"{{pub.link}}\">Read Me!</a>\r\n      <br>\r\n      <b>Authors:</b> {{pub.authors}}\r\n      <br>\r\n      <b>Published:</b> {{pub.pubDate}}\r\n      <br>\r\n      {{pub.abstract}}\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <button (click)=\"addToFollow(pubId)\" class=\"jj-button pull-right\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-pub/search-pub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPubComponent = (function () {
    function SearchPubComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SearchPubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = params['uid'];
        });
        this.picture = 'https://encrypted-tbn0.gstatic.com/' +
            'images?q=tbn:ANd9GcTkXo82F1PJkCzZO37XDfljAX5D85fw1_iBV1JmfunIlq0NXqUr';
        this.name = this.pub.name;
        this.pubId = this.pub._id;
        this.errorFlag = false;
    };
    SearchPubComponent.prototype.addToFollow = function (cbId) {
    };
    return SearchPubComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchPubComponent.prototype, "pub", void 0);
SearchPubComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-pub',
        template: __webpack_require__("../../../../../src/app/components/search/search-pub/search-pub.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-pub/search-pub.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchPubComponent);

var _a, _b;
//# sourceMappingURL=search-pub.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n\r\n.mb-navbar-padding {\r\n  padding-left: 10px;\r\n}\r\n\r\n.mb-input-padding {\r\n  padding-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Old version stable version from Miles:-->\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid row\">\r\n    <p class=\"navbar-header mb-navbar-padding pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <button class=\"navbar-default_blue\" (click)=\"goToProfile()\"><span\r\n          class=\"glyphicon glyphicon-chevron-left\"></span></button>\r\n        <b class=\"jj-font\">\r\n          Search\r\n        </b>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-header mb-input-padding\">\r\n      <input name=\"search\"\r\n             id=\"search\"\r\n             type=\"text\"\r\n             placeholder=\"search here\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #searchField=\"ngModel\"/></p>\r\n    <p class=\"navbar-text pull-right\">\r\n      <button (click)=\"search(searchField.value)\" type=\"submit\" class=\"navbar-link jj-button\">\r\n        <span class=\"jj-button-text glyphicon glyphicon-search\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<br>\r\n<br>\r\n<br>\r\n<div *ngIf=\"peopleReady\">\r\n  <button data-toggle=\"collapse\" data-target=\"#peopleResults\" class=\"form-control\">---- People Results ----</button>\r\n  <div id=\"peopleResults\" class=\"collapse in\">\r\n    <div *ngFor=\"let person of userResult\">\r\n      <app-search-profile [user]=\"person\"></app-search-profile>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <button data-toggle=\"collapse\" data-target=\"#spaceResults\" class=\"form-control\">---- Space Results ----</button>\r\n  <div id=\"spaceResults\" class=\"collapse in\">\r\n    <div *ngIf=\"cbReady\">\r\n      <div *ngFor=\"let cb of cbResult\">\r\n        <app-search-cb [cb]=\"cb\"></app-search-cb>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"ceReady\">\r\n      <div *ngFor=\"let ce of ceResult\">\r\n       <app-search-ce [ce]=\"ce\"></app-search-ce>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"pubReady\">\r\n      <div *ngFor=\"let pub of pubResult\">\r\n       <app-search-pub [pub]=\"pub\"></app-search-pub>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<div *ngIf=\"postReady\">\r\n  <p>\r\n    Post Results: (not working yet)\r\n    <br>\r\n  </p>\r\n</div>\r\n<div *ngIf=\"nasaReady\">\r\n  <button data-toggle=\"collapse\" data-target=\"#nasaResults\" class=\"form-control\">---- NASA Results ----</button>\r\n  <div id=\"nasaResults\" class=\"collapse in\">\r\n    <div *ngFor=\"let object of nasaResult\">\r\n      <app-search-nasa [nasaObject]=\"object\"></app-search-nasa>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pub_service_client__ = __webpack_require__("../../../../../src/app/services/pub.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchComponent = (function () {
    function SearchComponent(ceService, cbService, postService, pubService, nasaService, userService, router, activateRoute, sharedService) {
        this.ceService = ceService;
        this.cbService = cbService;
        this.postService = postService;
        this.pubService = pubService;
        this.nasaService = nasaService;
        this.userService = userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.sharedService = sharedService;
        this.userResult = [];
        this.cbResult = [];
        this.ceResult = [];
        this.pubResult = [];
        this.postResult = [];
        this.nasaResult = [];
        this.searchResultString = '';
        this.peopleReady = false;
        this.nasaReady = false;
        this.postReady = false;
        this.cbReady = false;
        this.ceReady = false;
        this.pubReady = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.userId = this.user._id;
    };
    SearchComponent.prototype.search = function (param) {
        var _this = this;
        this.searchResultString = '';
        this.userResult = [];
        this.searchparam = param;
        this.userService.findUserByUsername(param).subscribe(function (response) {
            if (response != null) {
                _this.userResult.push(response);
                _this.peopleReady = true;
            }
        });
        this.nasaService.searchImg(param).subscribe(function (imgresponse) {
            if (imgresponse != null) {
                _this.nasaResult = imgresponse.collection.items;
                _this.searchResultString += JSON.stringify(imgresponse) + '&nbsp&nbsp';
                _this.nasaReady = true;
            }
        });
        this.cbService.findCBbyText(param).subscribe(function (response) {
            if (response != null) {
                _this.cbResult = response;
                _this.cbReady = true;
            }
        });
        this.ceService.findCEbyText(param).subscribe(function (response) {
            if (response != null) {
                _this.ceResult = response;
                _this.ceReady = true;
                var temp = response.length;
            }
        });
        this.pubService.findPubbyText(param).subscribe(function (response) {
            if (response != null) {
                _this.pubResult = response;
                _this.pubReady = true;
                var temp = response.length;
            }
        });
    };
    SearchComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/' + this.userId]);
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SearchComponent.prototype, "searchForm", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__["a" /* CEService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__["a" /* CBService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__services_pub_service_client__["a" /* PubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_pub_service_client__["a" /* PubService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _k || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  color: goldenrod;\r\n}\r\n\r\nbody {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/vendors/image/starTrek.jpg") + ");\r\n  padding-top: 0px;\r\n  }\r\n\r\n.jj-h1 {\r\n  margin-top: 0px;\r\n  font-size: 150px;\r\n  text-align: center;\r\n}\r\n\r\n.jj-form {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<body>\r\n<div class=\"jj-bg\">\r\n  <div class=\"jj-font\">\r\n    <h1 class=\"jj-h1\">\r\n      SpaceBook\r\n    </h1>\r\n    <div>\r\n      <form class=\"jj-form\" #f=\"ngForm\">\r\n        <input name=\"username\"\r\n               id=\"username\"\r\n               type=\"text\"\r\n               placeholder=\"username\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               required\r\n               #username=\"ngModel\"/>\r\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n          Please enter a username!\r\n        </span>\r\n        <input name=\"password\"\r\n               id=\"password\"\r\n               type=\"password\"\r\n               placeholder=\"password\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               required\r\n               #password=\"ngModel\"/>\r\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n          Please enter password!\r\n        </span>\r\n        <button (click)=\"login(username.value, password.value)\"\r\n        class=\"btn btn-primary btn-block jj-button-hover\"\r\n        type=\"submit\"\r\n        [disabled]=\"!f.valid\">\r\n        Login\r\n        </button>\r\n        <a href=\"{{baseUrl}}/api/facebook/login\" class=\"btn btn-primary btn-block\">\r\n          <span class=\"fa fa-facebook\"></span>\r\n          Login via Facebook\r\n        </a>\r\n        <button class=\"btn btn-success btn-block jj-button-hover\"\r\n                aria-pressed=\"true\"\r\n                [routerLink]=\"['/register']\">\r\n          Register\r\n        </button>\r\n      </form>\r\n    </div>\r\n    <button class=\"jj-button\"><span (click)=\"goTofindAsteroid()\">Find asteroid by ID</span></button>\r\n    <button class=\"jj-button\"><span (click)=\"goToImageSearch()\">Image Search</span></button>\r\n    <button class=\"jj-button\"><span (click)=\"goToAPOD()\">APOD</span></button>\r\n    <button class=\"jj-button\"><span (click)=\"goToSearch()\">SEARCH OUR WEBSITE</span></button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FrontPageComponent = (function () {
    function FrontPageComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password!';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    FrontPageComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user', user._id]);
        });
    };
    FrontPageComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    FrontPageComponent.prototype.goToSearch = function () {
        this.router.navigate(['/search']);
    };
    FrontPageComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    FrontPageComponent.prototype.goToAPOD = function () {
        this.router.navigate(['/APOD']);
    };
    return FrontPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], FrontPageComponent.prototype, "loginForm", void 0);
FrontPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-front-page',
        template: __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], FrontPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=front-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"jj-font\">\r\n          Profile\r\n        </b>\r\n      </a>\r\n    </p>\r\n\r\n    <p class=\"navbar-text pull-right\">\r\n      <button (click)=\"goToProfile(username, email, firstName, lastName, phone, DOB)\" type=\"submit\" class=\"navbar-link jj-button\">\r\n        <span class=\"jj-button-text glyphicon glyphicon-ok\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid jj-body jj-font\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">\r\n        Username\r\n      </label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             id=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"Username\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"email\">\r\n        Email\r\n      </label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             id=\"email\"\r\n             type=\"email\"\r\n             placeholder=\"Email\"\r\n             class=\"form-control\"\r\n             email/>\r\n\r\n      <label for=\"First Name\">\r\n        First Name\r\n      </label>\r\n      <input [(ngModel)]=\"firstName\"\r\n             name=\"First Name\"\r\n             id=\"First Name\"\r\n             type=\"text\"\r\n             placeholder=\"First Name\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"Last Name\">\r\n        Last Name\r\n      </label>\r\n      <input [(ngModel)]=\"lastName\"\r\n             name=\"Last Name\"\r\n             id=\"Last Name\"\r\n             type=\"text\"\r\n             placeholder=\"Last Name\"\r\n             class=\"form-control\"/>\r\n      <label for=\"phone\">\r\n        Phone Number\r\n      </label>\r\n      <input [(ngModel)]=\"phone\"\r\n             name=\"phone\"\r\n             id=\"phone\"\r\n             type=\"tel\"\r\n             placeholder=\"xxx-xxx-xxxx\"\r\n             class=\"form-control\"/>\r\n      <label for=\"DOB\">\r\n        Birthday\r\n      </label>\r\n      <input [(ngModel)]=\"DOB\"\r\n             name=\"DOB\"\r\n             id=\"DOB\"\r\n             type=\"date\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n\r\n    <!--<form ngNoForm action=\"{{baseURL}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\"-->\r\n    <!--class=\"jj-form container-fluid\">-->\r\n    <!--<input name=\"myFile\" type=\"file\" class=\"form-control\"/>-->\r\n    <!--<input name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>-->\r\n    <!--<button (click)=\"commit(picture)\"-->\r\n    <!--type=\"submit\" class=\"btn btn-block btn-primary jj-button-hover\" aria-pressed=\"true\">Save Changes-->\r\n    <!--</button>-->\r\n    <!--<br/>-->\r\n    <!--</form>-->\r\n  </form>\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"deleteAccount(userId)\">\r\n    Delete Account\r\n  </button>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <button class=\"jj-button\" (click)=\"cancelChanges()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user['username'];
            _this.firstName = _this.user['firstName'];
            _this.password = _this.user['password'];
            _this.lastName = _this.user['lastName'];
            _this.email = _this.user['email'];
            _this.picture = _this.user['picture'];
            _this.DOB = _this.user['DOB'];
            _this.phone = _this.user['phone'];
        });
    };
    ProfileComponent.prototype.goToProfile = function (uname, email, fname, lname, phone, DOB) {
        var _this = this;
        var user = { username: uname, email: email, firstName: fname, lastName: lname, phone: phone, DOB: DOB };
        this.userService.updateUser(this.userId, user)
            .subscribe(function (user1) {
            _this.router.navigate(['user/' + _this.userId]);
        });
    };
    ProfileComponent.prototype.cancelChanges = function () {
        this.ngOnInit();
    };
    ProfileComponent.prototype.deleteAccount = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (users) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mh-backgroundColor {\r\n  background-color: #333;\r\n  border-bottom: 2px solid white;\r\n  border-right: 2px solid white;\r\n  border-left: 2px solid white;\r\n\r\n}\r\n\r\nmoh-maxPictureSize {\r\n  height:1%;\r\n  width: 1%;\r\n\r\n}\r\n\r\nb {\r\n  color: white;\r\n}\r\n\r\nh3 {\r\n  color: white;\r\n}\r\n\r\np {\r\n  color: white;\r\n}\r\n\r\n/* from: https://www.w3schools.com/howto/howto_css_cards.asp*/\r\n.jj-card {\r\n  /* Add shadows to create the \"card\" effect */\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow from: https://www.w3schools.com/howto/howto_css_cards.asp*/\r\n.jj-card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n.jj-container {\r\n  padding: 2px 16px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.mh-paddingAwayFromNavBar {\r\n  padding-top: 1%;\r\n}\r\n\r\n.mh-paddingAwayFromNavBarTriple {\r\n  padding-top: 3%;\r\n}\r\n\r\n.jj-img-padding {\r\n  padding-top: 25px;\r\n  width: 100%;\r\n}\r\n\r\n.jj-button-profile {\r\n  border: transparent;\r\n  background-color: transparent;\r\n}\r\n\r\n.jj-follows {\r\n  height: 35px;\r\n  width: 30px;\r\n}\r\n\r\n.glyphicon.glyphicon-picture {\r\n  font-size: 75px;\r\n  color: white;\r\n}\r\n\r\n.glyphicon.glyphicon-remove {\r\n  color: white;\r\n}\r\n\r\n\r\n.mh-roundedCorners {\r\n  border-radius: 25px;\r\n  border: 2px solid #ffffff;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.mh-roundedCornersForSmallButtons {\r\n  border-radius: 25px;\r\n  border: 2px solid #ffffff;\r\n  padding: 10px;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n.mh-roundedCornersV2 {\r\n  border-radius: 25px;\r\n  border: 2px solid #ffffff;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moh-buttonPadding {\r\n  padding: 50px;\r\n}\r\n\r\n.moh-max-height {\r\n  height: 100%;\r\n}\r\n\r\n.moh-btnWidthPlusMargin {\r\n  margin: 6px;\r\n  min-width: 152px;\r\n  max-width: 168px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n<div class=\"container-fluid mh-backgroundColor\">\r\n  <div class=\"col-sm-3 container-fluid mh-paddingAwayFromNavBarTriple\" align=\"center\">\r\n\r\n    <div *ngIf=\"dataReady\">\r\n  <!--<div class=\"container-fluid row\">-->\r\n    <div *ngIf=\"birthday\"\r\n         class=\"alert alert-danger\">\r\n      {{birthdayMsg}}\r\n    </div>\r\n    <!--<div class=\"col-sm-3\">-->\r\n    <button align =\"center\" class=\"jj-button-profile jj-card\" (click)=\"editProfile()\">\r\n      <img src=\"{{objData.picture}}\" height = \"200px\">\r\n      <div class=\"jj-container\">\r\n        <div [ngSwitch]=\"objType\" class=\"whiteText\">\r\n          <div *ngSwitchCase=\"'user'\">\r\n            <h4><b>{{objData.firstName}} {{objData.lastName}}</b></h4>\r\n          </div>\r\n          <div *ngSwitchCase=\"'cb'\">\r\n            <h4><b>{{objData.name}} {{objData.region}}</b></h4>\r\n          </div>\r\n          <div *ngSwitchCase=\"'ce'\">\r\n            <h4><b>{{objData.name}} {{objData.region}}</b></h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </button>\r\n    <div [ngSwitch]=\"objType\">\r\n      <div *ngSwitchCase=\"'user'\">\r\n        <!--Date of Birth: {{objData.DOB}}-->\r\n      </div>\r\n      <div *ngSwitchCase=\"'cb'\">\r\n        {{objData.wiki}}\r\n      </div>\r\n      <div *ngSwitchCase=\"'ce'\">\r\n        {{objData.wiki}}\r\n      </div>\r\n    </div>\r\n      <div *ngIf=\"checkUserType()\">\r\n      <button routerLink=\"/new\" class=\"btn btn-success form-control moh-btnWidthPlusMargin\">Contribute Content</button>\r\n    </div>\r\n      <div *ngIf=\"authorized() || checkMatchingId() || isAdmin()\">\r\n      <button (click)=\"edit(objId)\" class=\"btn btn-warning form-control moh-btnWidthPlusMargin\">Edit Current Page</button>\r\n      </div>\r\n      <div *ngIf=\"isAdmin()\">\r\n      <button (click)=\"findUsers()\" class=\"btn btn-info form-control moh-btnWidthPlusMargin\">Find All Users</button>\r\n      </div>\r\n      <!--</div>-->\r\n  <!--</div>-->\r\n  <button class=\" jj-button-profile\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"goToAlbums()\">\r\n    <h3>{{this.objData['firstName']}}'s Photos</h3>\r\n    <span class=\"glyphicon glyphicon-picture\"></span>\r\n  </button>\r\n\r\n  <div class=\"container-fluid\">\r\n    <h3>Follows</h3>\r\n    <div *ngFor=\"let user of follows\" class=\"mh-roundedCornersForSmallButtons\">\r\n      <button class=\"jj-button-profile\" (click)=\"goToUserProfile(user._id)\"><img class=\"jj-follows\" src=\"{{user.picture}}\"/>\r\n        <p>{{user.firstName}} {{user.lastName}}</p>\r\n      </button>\r\n      <button class=\"jj-button-profile whiteText\" (click)=\"deleteFollow(user._id)\"><span\r\n        class=\"glyphicon glyphicon-remove\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<button class=\"btn btn-warning btn-block jj-button-hover\"-->\r\n  <!--aria-pressed=\"true\"-->\r\n  <!--(click)=\"logout()\">-->\r\n  <!--Logout-->\r\n  <!--</button>-->\r\n  <!--<button class=\"btn btn-info btn-block jj-button-hover\"-->\r\n  <!--aria-pressed=\"true\"-->\r\n  <!--(click)=\"search()\">-->\r\n  <!--Search-->\r\n  <!--</button>-->\r\n</div>\r\n</div>\r\n\r\n\r\n<div class = \"col-sm-9 mh-paddingAwayFromNavBar\">\r\n  <div *ngIf=\"albumReady\" align=\"center\" class =\"hidden-xs mh-roundedCorners\">\r\n    <app-album-carousel [albumid]=\"albumid\"></app-album-carousel>\r\n  </div>\r\n  <div *ngIf=\"ifIdEqualPosterId()\" class=\"container-fluid mh-roundedCornersV2\">\r\n    <div *ngIf=\"ifIdEqualPosterId()\">\r\n      <app-create-post></app-create-post>\r\n    </div>\r\n  </div>\r\n  <app-post-list [posts]=\"postsInPublicProfile\" [IDfromProfile]=\"objId\"></app-post-list>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_album_service_client__ = __webpack_require__("../../../../../src/app/services/album.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__ = __webpack_require__("../../../../../src/app/services/ce.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PublicProfileComponent = (function () {
    function PublicProfileComponent(router, activatedRoute, userService, postService, cbService, sharedService, albumService, ceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.postService = postService;
        this.cbService = cbService;
        this.sharedService = sharedService;
        this.albumService = albumService;
        this.ceService = ceService;
        this.objData = {};
        this.today = new Date();
        this.birthdayMsg = 'Happy Birthday!';
        this.baseURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl;
        this.albumReady = true;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumReady = false;
        this.dataReady = false;
        this.flipper = true;
        this.user = this.sharedService.user;
        this.sharedServiceUserId = this.user._id;
        this.currentURL = window.location.href;
        if (this.currentURL.includes('api/login')) {
            this.flipper = false;
        }
        if (this.user.username === undefined) {
            this.router.navigate([this.baseURL, 'user', this.user._id, 'edit']);
        }
        else {
            if (this.flipper) {
                this.activatedRoute.params
                    .subscribe(function (params) {
                    _this.objId = params['uid'];
                    _this.objType = params['obtype'];
                    _this.userService.findUserById(_this.objId)
                        .subscribe(function (user) {
                        _this.objData = user;
                        _this.user = user;
                        _this.birthday = false;
                        switch (_this.objType) {
                            case 'cb':
                                _this.getCBData(_this.objId);
                                break;
                            case 'ce':
                                _this.getCEData(_this.objId);
                                break;
                            case 'user':
                                _this.getUserData(_this.objId);
                                break;
                            case 'org':
                                _this.getUserData(_this.objId);
                                break;
                        }
                    });
                });
            }
            else {
                this.flipper = true;
                this.objId = this.user._id;
                this.objType = 'user';
                this.userService.findUserById(this.objId)
                    .subscribe(function (user) {
                    _this.objData = user;
                    _this.getUserData(_this.objId);
                    _this.router.navigate([_this.baseURL, 'user', _this.objId]);
                });
            }
        }
    };
    PublicProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['user/' + this.objId + '/edit']);
    };
    PublicProfileComponent.prototype.goToUserProfile = function (objId) {
        this.router.navigate(['user/' + objId]);
        // this.ngOnInit();
    };
    PublicProfileComponent.prototype.navigateToPost = function () {
        this.router.navigate(['user/' + this.objId + '/posts/new']);
    };
    PublicProfileComponent.prototype.search = function () {
        this.router.navigate(['user/' + this.objId + '/search']);
    };
    PublicProfileComponent.prototype.getCBData = function (objId) {
        var _this = this;
        this.cbService.findCBbyId(this.objId).subscribe(function (cb) {
            _this.objData = cb;
            _this.follows = [];
            _this.findPostsForNonUserDataByTag();
            _this.dataReady = true;
        });
    };
    PublicProfileComponent.prototype.getCEData = function (objId) {
        var _this = this;
        this.ceService.findCEbyId(this.objId).subscribe(function (ce) {
            _this.objData = ce;
            _this.follows = [];
            _this.findPostsForNonUserDataByTag();
            _this.dataReady = true;
        });
    };
    /**
     * Helper function for non-user object's post retrieval by tag.
     */
    PublicProfileComponent.prototype.findPostsForNonUserDataByTag = function () {
        var _this = this;
        this.postService.findPostsbyTag(this.objData['name'])
            .subscribe(function (posts) {
            posts = posts.slice(0).reverse();
            _this.postsInPublicProfile = posts;
        });
    };
    PublicProfileComponent.prototype.getUserData = function (objId) {
        var f = [];
        for (var i = 0; i < this.objData['follows'].length; i++) {
            this.userService.findUserById(this.objData['follows'][i])
                .subscribe(function (user1) {
                f.push(user1);
            });
            this.follows = f;
        }
        this.findPostsByTagForUser();
        this.prepAlbum();
        this.dataReady = true;
    };
    /**
     * Helper function for getUserData()
     */
    PublicProfileComponent.prototype.findPostsByTagForUser = function () {
        var _this = this;
        this.postService.findPostsbyTag(this.objData['username'])
            .subscribe(function (posts) {
            posts = posts.slice(0).reverse();
            _this.postsInPublicProfile = posts;
        });
    };
    PublicProfileComponent.prototype.deleteFollow = function (objId) {
        for (var i = 0; i < this.follows.length; i++) {
            if (this.follows[i]._id === objId) {
                this.follows.splice(i, 1);
            }
        }
        this.sharedService.user['follows'] = [];
        for (var i = 0; i < this.follows.length; i++) {
            this.sharedService.user['follows'].push(this.follows[i]._id);
        }
        this.userService.updateUser(this.objId, this.sharedService.user)
            .subscribe(function (usr) {
        });
    };
    PublicProfileComponent.prototype.goToAlbums = function () {
        this.router.navigate(['user/' + this.objId + '/album']);
    };
    PublicProfileComponent.prototype.ifIdEqualPosterId = function () {
        return (this.objId === this.sharedServiceUserId);
    };
    PublicProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['login']);
        });
    };
    /**
     * Still is not able to deal with the bug that if a
     * user has multiple albums and then deletes the first one, otherwise appears to function.
     */
    PublicProfileComponent.prototype.prepAlbum = function () {
        if (this.user.albums.length > 0) {
            this.albumid = this.user.albums[0];
            this.albumReady = true;
        }
    };
    PublicProfileComponent.prototype.isAdmin = function () {
        return this.sharedService.user['userType'] === 'ADMIN';
    };
    PublicProfileComponent.prototype.authorized = function () {
        if (this.sharedService.user['_id'] === this.objId) {
            return true;
        }
        else if ((this.objType === 'user') && (this.sharedService.isType('ADMIN'))) {
            return true;
        }
        else if ((this.objType === 'ce') && (this.sharedService.isType('PROFESSIONAL'))) {
            return true;
        }
        else if ((this.objType === 'cb') && (this.sharedService.isType('ORGANIZATION'))) {
            return true;
        }
        else {
            return false;
        }
    };
    PublicProfileComponent.prototype.edit = function (objId) {
        this.router.navigate(['edit/' + objId]);
    };
    PublicProfileComponent.prototype.findUsers = function () {
        this.router.navigate(['admin/user']);
    };
    PublicProfileComponent.prototype.checkUserType = function () {
        var user = this.sharedService.user;
        if (user['_id'] !== this.objId || user['userType'] === 'AMATEUR') {
            return false;
        }
        return true;
    };
    PublicProfileComponent.prototype.checkMatchingId = function () {
        var user = this.sharedService.user;
        if (user['_id'] !== this.objId) {
            return false;
        }
        return true;
    };
    return PublicProfileComponent;
}());
PublicProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public-profile',
        template: __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_cb_service_client__["a" /* CBService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_album_service_client__["a" /* AlbumServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_album_service_client__["a" /* AlbumServiceClient */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__["a" /* CEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_ce_service_client__["a" /* CEService */]) === "function" && _h || Object])
], PublicProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<div class=\"container-fluid jj-font\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Register</h1>\r\n  <form (ngSubmit)=\"register(username.value, password.value, email.value, firstName.value, lastName.value, DOB.value, userType)\" #f=\"ngForm\">\r\n    <div class=\"form-group form-control\">\r\n      <label>User Type:</label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='AMATEUR' [(ngModel)]=\"userType\" >Amateur Astronomer\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='PROFESSIONAL' [(ngModel)]=\"userType\" >Professional Astronomer\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='ORGANIZATION' [(ngModel)]=\"userType\" >Space Organization\r\n      </label>\r\n\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" name=\"optradio\" value='UNIVERSITY' [(ngModel)]=\"userType\" >University\r\n      </label>\r\n\r\n    </div>\r\n    <input name=\"username\"\r\n           id=\"username\"\r\n           type=\"text\"\r\n           placeholder=\"username\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #username=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n    </span>\r\n\r\n    <input name=\"password\"\r\n           id=\"password\"\r\n           type=\"password\"\r\n           placeholder=\"password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #password=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <input name=\"verify password\"\r\n           id=\"verify_password\"\r\n           type=\"password\"\r\n           placeholder=\"verify password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #verify_password=\"ngModel\">\r\n\r\n    <span class=\"help-block\" *ngIf=\"!verify_password.valid && verify_password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <span class=\"help-block\" *ngIf=\"verify_password.value != password.value\">\r\n      Passwords do not match!\r\n    </span>\r\n\r\n    <input name=\"email\"\r\n           id=\"email\"\r\n           type=\"text\"\r\n           placeholder=\"email\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #email=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\r\n      Please enter email!\r\n    </span>\r\n    <input name=\"firstName\"\r\n           id=\"firstName\"\r\n           type=\"text\"\r\n           placeholder=\"first name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #firstName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n      Please enter first name!\r\n    </span>\r\n    <input name=\"lastName\"\r\n           id=\"lastName\"\r\n           type=\"text\"\r\n           placeholder=\"last name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #lastName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n      Please enter last name!\r\n    </span>\r\n    <input name=\"DOB\"\r\n           id=\"DOB\"\r\n           type=\"date\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #DOB=\"ngModel\"/>\r\n    <input name=\"phone\"\r\n           id=\"phone\"\r\n           type=\"tel\"\r\n           placeholder=\"xxx-xxx-xxxx\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #phone=\"ngModel\"/>\r\n\r\n  </form>\r\n  <button (click)=\"registered(username.value, password.value, firstName.value, lastName.value, email.value, DOB.value, phone.value, userType)\"\r\n          class=\"btn btn-primary btn-block jj-button-hover\"\r\n          type=\"submit\"\r\n          aria-pressed=\"true\"\r\n          [disabled]=\"!f.valid\">\r\n    Register\r\n  </button>\r\n\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          [routerLink]=\"['']\">\r\n    Cancel\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, email, firstName, lastName, DOB, userType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.userType = userType;
        this.errorMsg = 'Invalid username or password!';
        this.errorFlag = false;
    };
    RegisterComponent.prototype.registered = function (username, password, firstName, lastName, email, DOB, phone, userType) {
        var _this = this;
        this.userService.findUserByUsername(username)
            .subscribe(function (user) {
            if (user !== null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Username already in use, please choose another username!';
            }
            else {
                var user1 = { username: username, password: password, firstName: firstName, lastName: lastName, email: email,
                    picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg', DOB: DOB, phone: phone, userType: userType };
                _this.userService.register(user1, password)
                    .subscribe(function (user2) {
                    _this.user = user2;
                    _this.user_id = user2['_id'];
                    _this.sharedService.user = _this.user;
                    _this.router.navigate(['user/', _this.user_id]);
                });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminServiceClient = (function () {
    function AdminServiceClient(http, router, sharedService, userService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    AdminServiceClient.prototype.canActivate = function () {
        return this.userService.isAdmin();
    };
    return AdminServiceClient;
}());
AdminServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], AdminServiceClient);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/album.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumServiceClient = (function () {
    function AlbumServiceClient(router, http) {
        this.router = router;
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createAlbum': this.createAlbum,
            'findAlbumById': this.findAlbumById,
            'findAllAlbumsByUser': this.findAllAlbumsByUser,
            'updateAlbum': this.updateAlbum,
            'deleteAlbum': this.deleteAlbum
        };
    }
    AlbumServiceClient.prototype.createAlbum = function (userId, album) {
        var url = this.baseURL + '/api/user/' + userId + '/album';
        return this.http.post(url, album)
            .map(function (res) {
            return res.json();
        });
    };
    AlbumServiceClient.prototype.findAlbumById = function (albumId) {
        var url = this.baseURL + '/api/album/' + albumId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    AlbumServiceClient.prototype.findAllAlbumsByUser = function (userId) {
        var url = this.baseURL + '/api/user/' + userId + '/album';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    AlbumServiceClient.prototype.updateAlbum = function (albumId, album) {
        var url = this.baseURL + '/api/album/' + albumId;
        return this.http.put(url, album)
            .map(function (res) {
            return res.json();
        });
    };
    AlbumServiceClient.prototype.deleteAlbum = function (albumId) {
        var url = this.baseURL + '/api/album/' + albumId;
        return this.http.delete(url);
    };
    return AlbumServiceClient;
}());
AlbumServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], AlbumServiceClient);

var _a, _b;
//# sourceMappingURL=album.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/cb.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CBService = (function () {
    function CBService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createCB': this.createCB,
            'findCBbyId': this.findCBbyId,
            'findCBbyText': this.findCBbyText,
            'updateCB': this.updateCB,
            'deleteCB': this.deleteCB
        };
    }
    CBService.prototype.createCB = function (cb) {
        var url = this.baseURL + '/api/cb';
        return this.http.post(url, cb)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.findCBbyId = function (cbId) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.findCBbyText = function (text) {
        var url = this.baseURL + '/api/cb?text=' + text;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.updateCB = function (cbId, cb) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.put(url, cb)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.deleteCB = function (cbId) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.delete(url);
    };
    return CBService;
}());
CBService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CBService);

var _a;
//# sourceMappingURL=cb.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/ce.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CEService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CEService = (function () {
    function CEService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createCE': this.createCE,
            'findCEbyId': this.findCEbyId,
            'findCEbyText': this.findCEbyText,
            'updateCE': this.updateCE,
            'deleteCE': this.deleteCE
        };
    }
    CEService.prototype.createCE = function (ce) {
        var url = this.baseURL + '/api/ce';
        return this.http.post(url, ce)
            .map(function (response) {
            return response.json();
        });
    };
    CEService.prototype.findCEbyId = function (ceId) {
        var url = this.baseURL + '/api/ce/' + ceId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CEService.prototype.findCEbyText = function (text) {
        var url = this.baseURL + '/api/ce?text=' + text;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CEService.prototype.updateCE = function (ceId, ce) {
        var url = this.baseURL + '/api/ce/' + ceId;
        return this.http.put(url, ce)
            .map(function (response) {
            return response.json();
        });
    };
    CEService.prototype.deleteCE = function (ceId) {
        var url = this.baseURL + '/api/ce/' + ceId;
        return this.http.delete(url);
    };
    return CEService;
}());
CEService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CEService);

var _a;
//# sourceMappingURL=ce.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/nasa.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaServiceClient = (function () {
    function NasaServiceClient(http) {
        this.http = http;
    }
    NasaServiceClient.prototype.searchAsteroid = function (asteroidId) {
        var url = 'https://api.nasa.gov/neo/rest/v1/neo/' + asteroidId + '?api_key=qnRIVwggS9kblyYoKRBAfyw9UymHsMx8COLqcNyd';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.searchImg = function (params) {
        var _this = this;
        var url = 'https://images-api.nasa.gov/search?q=' + params + '&media_type=image';
        return this.http.get(url)
            .map(function (response) {
            _this.imgSearch = response.json();
            return response.json();
        });
    };
    NasaServiceClient.prototype.getAPOD = function () {
        var url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.getAPODPictureOfDate = function (params) {
        var url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.requestDetails = function (id) {
        var item = this.imgSearch.collection.items[id];
        return item;
    };
    return NasaServiceClient;
}());
NasaServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NasaServiceClient);

var _a;
//# sourceMappingURL=nasa.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/picture.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PictureServiceClient = (function () {
    function PictureServiceClient(router, http) {
        this.router = router;
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPicture': this.createPicture,
            'findPictureById': this.findPictureById,
            'findPicturesByAlbum': this.findPicturesByAlbum,
            'updatePicture': this.updatePicture,
            'deletePicture': this.deletePicture
        };
    }
    PictureServiceClient.prototype.createPicture = function (albumId, picture) {
        var url = this.baseURL + '/api/album/' + albumId + '/pic';
        return this.http.post(url, picture)
            .map(function (res) {
            return res.json();
        });
    };
    PictureServiceClient.prototype.findPictureById = function (picId) {
        var url = this.baseURL + '/api/pic/' + picId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PictureServiceClient.prototype.findPicturesByAlbum = function (albumId) {
        var url = this.baseURL + '/api/album/' + albumId + '/picture';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PictureServiceClient.prototype.updatePicture = function (picId, picture) {
        var url = this.baseURL + '/api/pic/' + picId;
        return this.http.put(url, picture)
            .map(function (res) {
            return res.json();
        });
    };
    PictureServiceClient.prototype.deletePicture = function (picId) {
        var url = this.baseURL + '/api/pic/' + picId;
        return this.http.delete(url);
    };
    return PictureServiceClient;
}());
PictureServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], PictureServiceClient);

var _a, _b;
//# sourceMappingURL=picture.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPost': this.createPost,
            'findPostbyId': this.findPostbyId,
            'findPostsbyTags': this.findPostsbyTags,
            'findPostsbyTag': this.findPostsbyTag,
            'updatePost': this.updatePost,
            'deletePost': this.deletePost,
            'findAllPosts': this.findAllPosts,
            'findPostsByUser': this.findPostsByUser
        };
    }
    PostService.prototype.createPost = function (post) {
        var url = this.baseURL + '/api/post';
        return this.http.post(url, post)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsByUser = function (userId) {
        var url = this.baseURL + '/api/post/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostbyId = function (postId) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findAllPosts = function () {
        var url = this.baseURL + '/api/post';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsbyTags = function (tags) {
        var url = this.baseURL + '/api/post?tags=' + tags;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsbyTag = function (tag) {
        var url = this.baseURL + '/api/post?tag=' + tag;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.updatePost = function (postId, post) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.put(url, post)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.deletePost = function (postId) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.delete(url);
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/pub.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PubService = (function () {
    function PubService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPub': this.createPub,
            'findPubbyId': this.findPubbyId,
            'findPubbyText': this.findPubbyText,
            'updatePub': this.updatePub,
            'deletePub': this.deletePub
        };
    }
    PubService.prototype.createPub = function (pub) {
        var url = this.baseURL + '/api/pub';
        return this.http.post(url, pub)
            .map(function (response) {
            return response.json();
        });
    };
    PubService.prototype.findPubbyId = function (pubId) {
        var url = this.baseURL + '/api/pub/' + pubId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PubService.prototype.findPubbyText = function (text) {
        var url = this.baseURL + '/api/pub?text=' + text;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PubService.prototype.updatePub = function (pubId, pub) {
        var url = this.baseURL + '/api/pub/' + pubId;
        return this.http.put(url, pub)
            .map(function (response) {
            return response.json();
        });
    };
    PubService.prototype.deletePub = function (pubId) {
        var url = this.baseURL + '/api/pub/' + pubId;
        return this.http.delete(url);
    };
    return PubService;
}());
PubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PubService);

var _a;
//# sourceMappingURL=pub.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = {};
    }
    SharedService.prototype.isType = function (typeToCheck) {
        for (var i = 0; i < this.user['userType'].length; i++) {
            if (this.user['userType'][i] === typeToCheck) {
                return true;
            }
        }
        return false;
    };
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'register': this.register,
            'findAllUsers': this.findAllUsers,
            'isAdmin': this.isAdmin
        };
    }
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.baseURL + '/api/admin/isAdmin';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (response) {
            var user = response.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['default']);
                return false;
            }
        });
    };
    UserService.prototype.findAllUsers = function () {
        var url = this.baseURL + '/api/admin/user';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseURL + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseURL + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseURL + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.register = function (user, password) {
        var url = this.baseURL + '/api/register';
        var credentials = {
            user: user,
            username: user.username,
            password: password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            picture: user.picture,
            DOB: user.DOB,
            phone: user.phone,
            albums: user.albums,
            follows: user.follows,
            userType: user.userType
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.addFollower = function (userId, followedId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.put(url, followedId)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseURL + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseURL + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.delete(url);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topMargin {\r\n  margin-top: 40px;\r\n}\r\n/*This code was taken from: https://www.w3schools.com/howto/howto_js_topnav.asp*/\r\n\r\n/* Add a black background color to the top navigation */\r\n.SpaceNav {\r\n  background-color: black;\r\n  overflow: hidden;\r\n  border: 2px solid #ffffff;\r\n\r\n}\r\n\r\n\r\n/* Style the links inside the navigation bar */\r\n.SpaceNav a {\r\n  float: left;\r\n  display: block;\r\n  color: white;\r\n  font-family: final_frontier_old_styleRg;\r\n  text-align: center;\r\n  text-color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 28px;\r\n}\r\n\r\n/* Change the color of links on hover */\r\n.SpaceNav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n  border: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n.SpaceNav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The banner-->\r\n<div class=\"SpaceNav moh-jj-font\" id=\"SpaceNavBar\">\r\n  <a (click)=\"navigateToHomePage()\">SpaceBook</a>\r\n  <!--<app-search></app-search>-->\r\n  <a class = \"pull-right\" (click) = \"logout()\">Logout</a>\r\n  <a class = \"pull-right\" (click) = \"navigateToSearch()\">Search</a>\r\n  <a class = \"pull-right\" (click) = \"navigateToProfile()\">Profile</a>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceBannerDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaceBannerDefaultComponent = (function () {
    function SpaceBannerDefaultComponent(userService, sharedService, route, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
    }
    SpaceBannerDefaultComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    SpaceBannerDefaultComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['user', this.user._id]);
    };
    SpaceBannerDefaultComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['search']);
    };
    SpaceBannerDefaultComponent.prototype.navigateToHomePage = function () {
        this.router.navigate(['']);
    };
    SpaceBannerDefaultComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['login']);
        });
    };
    return SpaceBannerDefaultComponent;
}());
SpaceBannerDefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-space-banner-default',
        template: __webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.html"),
        styles: [__webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SpaceBannerDefaultComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=space-banner-default.component.js.map

/***/ }),

/***/ "../../../../../src/assets/vendors/image/homepageBackground.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "homepageBackground.d45593947f135c047205.jpg";

/***/ }),

/***/ "../../../../../src/assets/vendors/image/starTrek.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "starTrek.e6af6f101d30a8b8516a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map