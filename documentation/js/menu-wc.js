'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">angular6-demo documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-e3499b296bfb8c62ff6fb1f5414f5b9e"' : 'data-target="#xs-components-links-module-AppModule-e3499b296bfb8c62ff6fb1f5414f5b9e"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-e3499b296bfb8c62ff6fb1f5414f5b9e"' : 'id="xs-components-links-module-AppModule-e3499b296bfb8c62ff6fb1f5414f5b9e"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthModule-fccb880689c152c9b2735108c81980d8"' : 'data-target="#xs-components-links-module-AuthModule-fccb880689c152c9b2735108c81980d8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthModule-fccb880689c152c9b2735108c81980d8"' : 'id="xs-components-links-module-AuthModule-fccb880689c152c9b2735108c81980d8"' }>
                                        <li class="link">
                                            <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPageComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-1cd7096b690c758db46f80b3c690ede0"' : 'data-target="#xs-components-links-module-CoreModule-1cd7096b690c758db46f80b3c690ede0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-1cd7096b690c758db46f80b3c690ede0"' : 'id="xs-components-links-module-CoreModule-1cd7096b690c758db46f80b3c690ede0"' }>
                                        <li class="link">
                                            <a href="components/LangSwitchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LangSwitchComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HomeModule-8d32c7320a0197733204c6752271e7c0"' : 'data-target="#xs-components-links-module-HomeModule-8d32c7320a0197733204c6752271e7c0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HomeModule-8d32c7320a0197733204c6752271e7c0"' : 'id="xs-components-links-module-HomeModule-8d32c7320a0197733204c6752271e7c0"' }>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SporkListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SporkListComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LayoutModule-088f5607457c77da9ea7db6683b4b870"' : 'data-target="#xs-components-links-module-LayoutModule-088f5607457c77da9ea7db6683b4b870"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LayoutModule-088f5607457c77da9ea7db6683b4b870"' : 'id="xs-components-links-module-LayoutModule-088f5607457c77da9ea7db6683b4b870"' }>
                                        <li class="link">
                                            <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BackToLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackToLoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ErrorPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorPageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TopnavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopnavComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/LogServiceAbstract.html" data-type="entity-link">LogServiceAbstract</a>
                    </li>
                    <li class="link">
                        <a href="classes/Spork.html" data-type="entity-link">Spork</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/DateHelperService.html" data-type="entity-link">DateHelperService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ErrorHandlerService.html" data-type="entity-link">ErrorHandlerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LogService.html" data-type="entity-link">LogService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LoginFormFactory.html" data-type="entity-link">LoginFormFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LogoutService.html" data-type="entity-link">LogoutService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterFormFactory.html" data-type="entity-link">RegisterFormFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RequestInspectorService.html" data-type="entity-link">RequestInspectorService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SporkFactory.html" data-type="entity-link">SporkFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SporkService.html" data-type="entity-link">SporkService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserFactory.html" data-type="entity-link">UserFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/AuthTokenInterceptor.html" data-type="entity-link">AuthTokenInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/JsonHeaderInterceptor.html" data-type="entity-link">JsonHeaderInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/LogRequestInterceptor.html" data-type="entity-link">LogRequestInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/LogResponseInterceptor.html" data-type="entity-link">LogResponseInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/TimingInterceptor.html" data-type="entity-link">TimingInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ApiResponse.html" data-type="entity-link">ApiResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ErrorResponse.html" data-type="entity-link">ErrorResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/JwtPayload.html" data-type="entity-link">JwtPayload</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LoginResult.html" data-type="entity-link">LoginResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SporkPayload.html" data-type="entity-link">SporkPayload</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UserPayload.html" data-type="entity-link">UserPayload</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
