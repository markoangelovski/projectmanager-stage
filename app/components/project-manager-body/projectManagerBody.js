export const projectManagerBody = `
<!-- Begin page -->
<div id="wrapper">

    <!-- Topbar Start -->
    <div class="navbar-custom">
        <ul class="list-unstyled topnav-menu float-right mb-0">

            <li class="d-none d-sm-block">
                <form class="app-search">
                    <div class="app-search-box">
                        <div class="input-group">
                            <input id="search" type="text" class="form-control" placeholder="Search Projects...">
                            <div class="input-group-append">
                                <button class="btn" type="submit">
                                    <i class="fe-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="search-results" class="search-results dropdown-menu" x-placement="bottom-start"
                    style="position: relative;will-change: transform;top: 0px;left: 0px;transform: translate3d(0px, 70px, 0px);">
                    <div class="dropdown-divider" style="display: none;"></div>
                    <!-- items-->
                </div>
            </li>

            <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#"
                    role="button" aria-haspopup="false" aria-expanded="false">
                    <i class="fe-bell noti-icon"></i>
                    <span class="badge badge-danger rounded-circle noti-icon-badge">4</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                    <!-- item-->
                    <div class="dropdown-item noti-title">
                        <h5 class="m-0">
                            <span class="float-right">
                                <a href="" class="text-dark">
                                    <small>Clear All</small>
                                </a>
                            </span>Notification
                        </h5>
                    </div>

                    <div class="slimscroll noti-scroll">

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item active">
                            <div class="notify-icon bg-soft-primary text-primary">
                                <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p class="notify-details">Doug Dukes commented on Admin Dashboard
                                <small class="text-muted">1 min ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon">
                                <img class="img-fluid rounded-circle" alt=""> </div>
                            <p class="notify-details">Mario Drummond</p>
                            <p class="text-muted mb-0 user-msg">
                                <small>Hi, How are you? What about our next meeting</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon">
                                <img class="img-fluid rounded-circle" alt=""> </div>
                            <p class="notify-details">Karen Robinson</p>
                            <p class="text-muted mb-0 user-msg">
                                <small>Wow ! this admin looks good and awesome design</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-soft-warning text-warning">
                                <i class="mdi mdi-account-plus"></i>
                            </div>
                            <p class="notify-details">New user registered.
                                <small class="text-muted">5 hours ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-info">
                                <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p class="notify-details">Caleb Flakelar commented on Admin
                                <small class="text-muted">4 days ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-secondary">
                                <i class="mdi mdi-heart"></i>
                            </div>
                            <p class="notify-details">Carlos Crouch liked
                                <b>Admin</b>
                                <small class="text-muted">13 days ago</small>
                            </p>
                        </a>
                    </div>

                    <!-- All-->
                    <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                        View all
                        <i class="fi-arrow-right"></i>
                    </a>

                </div>
            </li>

            <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                    href="#" role="button" aria-haspopup="false" aria-expanded="false">
                </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="remixicon-account-circle-line"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="remixicon-settings-3-line"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="remixicon-wallet-line"></i>
                        <span>My Wallet <span class="badge badge-success float-right">3</span> </span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="remixicon-lock-line"></i>
                        <span>Lock Screen</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- item-->
                    <a id="logout" href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="remixicon-logout-box-line"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </li>


            <li class="dropdown notification-list">
                <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect waves-light">
                    <i class="fe-settings noti-icon"></i>
                </a>
            </li>


        </ul>

        <!-- LOGO -->
        <div class="logo-box">
            <a href="${
              process.env.API_CONFIG === "stage" ? "/projectmanager-stage" : "/"
            }" class="logo text-center">
                <span class="logo-lg">
                    <img src="./assets/images/JS-logo.svg" alt="Project Manager">
                    <span class="logo-lg-text-light">Project Manager</span>
                </span>
                <span class="logo-sm">
                    <img src="./assets/images/JS-logo.svg" alt="Project Manager">
                </span>
            </a>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light">
                    <i class="fe-menu"></i>
                </button>
            </li>

            <li class="dropdown d-lg-block">
                <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"
                    role="button" aria-haspopup="false" aria-expanded="false">
                    Create New
                    <i class="mdi mdi-chevron-down"></i>
                </a>
                <div class="dropdown-menu">
                    <!-- item-->
                    <a id="new-project" href="javascript:void(0);" class="dropdown-item" data-toggle="modal"
                        data-target="#full-width-modal">
                        <i class="fe-briefcase mr-1"></i>
                        <span>New Project</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="fe-user mr-1"></i>
                        <span>Create Users</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="fe-bar-chart-line- mr-1"></i>
                        <span>Revenue Report</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="fe-settings mr-1"></i>
                        <span>Settings</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="fe-headphones mr-1"></i>
                        <span>Help &amp; Support</span>
                    </a>

                </div>
            </li>
        </ul>
    </div>
    <!-- end Topbar -->

    <!-- ========== Left Sidebar Start ========== -->
    <div class="left-side-menu">

        <div class="slimscroll-menu">

            <!--- Sidemenu -->
            <div id="sidebar-menu">

                <ul class="metismenu" id="side-menu">

                    <li class="menu-title">Menu</li>

                    <li>
                        <a href="javascript: void(0);" class="waves-effect active">
                            <i class="remixicon-dashboard-line"></i>
                            <span id="project-count" class="badge badge-success badge-pill float-right"></span>
                            <span> Projects </span>
                        </a>
                        <ul id="overview" class="nav-second-level" aria-expanded="false">
                            <li>
                                <form class="" role="form">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <input type="text" id="search-project" class="form-control" placeholder="Search projects">
                                            <div class="search-results-left dropdown-menu" x-placement="bottom-start"
                                                style="will-change: transform;top: 0px;left: 10px;transform: translate3d(0px, 70px, 0px);">
                                                <div class="dropdown-divider" style="display: none;"></div>
                                                <!-- items-->
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <a id="overview-link" href="#" class="active">Overview</a>
                            </li>
                            <li id="project-menu" style="display: block; ">
                                <a href="javascript: void(0);" aria-expanded="false">
                                    <span id="project-title-placeholder"></span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul id="project-menu-dropdown" class="nav-third-level nav mm-collapse"
                                    aria-expanded="false" style="height: 0px;">
                                    <li>
                                        <a id="" href="javascript: void(0);">Kanboard</a>
                                    </li>
                                    <li>
                                        <a id="project-details-link" data-anchor=""
                                            href="javascript: void(0);">Details</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="waves-effect">
                            <i class="remixicon-stack-line"></i>
                            <span> Apps </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" aria-expanded="false">
                            <li>
                                <a id="calendar-link" href="javascript: void(0);">Calendar</a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            <!-- End Sidebar -->

            <div class="clearfix"></div>

        </div>
        <!-- Sidebar -left -->

    </div>
    <!-- Left Sidebar End -->

    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                                <ol id="breadcrumb-placeholder" class="breadcrumb m-0">

                                </ol>
                            </div>
                            <h4 class="page-title"></h4>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <!-- start main-placeholder -->
                <div id="main-placeholder"></div>
                <!-- end main-placeholder -->
                
            </div> <!-- container -->

        </div> <!-- content -->

        <!-- Footer Start -->
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        2016 - 2019 © Minton theme by <a href="https://coderthemes.com/minton/">Coderthemes</a>
                    </div>
                    <div class="col-md-6">
                        <div class="text-md-right footer-links d-none d-sm-block">
                            <a href="javascript:void(0);">About Us</a>
                            <a href="javascript:void(0);">Help</a>
                            <a href="javascript:void(0);">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end Footer -->

    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->


</div>
<!-- END wrapper -->
<!-- Right Sidebar -->
<div class="right-bar">
    <div class="rightbar-title">
        <a href="javascript:void(0);" class="right-bar-toggle float-right">
            <i class="fe-x noti-icon"></i>
        </a>
        <h4 class="m-0 text-white">Settings</h4>
    </div>
    <div class="slimscroll-menu">
        <!-- User box -->
        <div class="user-box">
            <div class="user-img">
                <img alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">
                <a href="javascript:void(0);" class="user-edit"><i class="mdi mdi-arrow-top-right-bold-outline"></i></a>
            </div>

            <h5><a href="javascript: void(0);">Nik G. Patel</a> </h5>
            <p class="text-muted mb-0"><small>Admin Head</small></p>
        </div>

        <ul class="nav nav-pills bg-light nav-justified">
            <li class="nav-item">
                <a href="#home1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                    General
                </a>
            </li>
            <li class="nav-item">
                <a href="#messages1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 active">
                    Chat
                </a>
            </li>
        </ul>
        <div class="tab-content pl-3 pr-3">
            <div class="tab-pane" id="home1">
                <div class="row mb-2">
                    <div class="col">
                        <h5 class="m-0 font-15">Notifications</h5>
                        <p class="text-muted"><small>Do you need them?</small></p>
                    </div> <!-- end col-->
                    <div class="col-auto">
                        <div class="custom-control custom-switch mb-2">
                            <input type="checkbox" class="custom-control-input" id="tabswitch1">
                            <label class="custom-control-label" for="tabswitch1"></label>
                        </div>
                    </div> <!-- end col -->
                </div>
                <!-- end row-->

                <div class="row mb-2">
                    <div class="col">
                        <h5 class="m-0 font-15">API Access</h5>
                        <p class="text-muted"><small>Enable/Disable access</small></p>
                    </div> <!-- end col-->
                    <div class="col-auto">
                        <div class="custom-control custom-switch mb-2">
                            <input type="checkbox" class="custom-control-input" checked id="tabswitch2">
                            <label class="custom-control-label" for="tabswitch2"></label>
                        </div>
                    </div> <!-- end col -->
                </div>
                <!-- end row-->

                <div class="row mb-2">
                    <div class="col">
                        <h5 class="m-0 font-15">Auto Updates</h5>
                        <p class="text-muted"><small>Keep up to date</small></p>
                    </div> <!-- end col-->
                    <div class="col-auto">
                        <div class="custom-control custom-switch mb-2">
                            <input type="checkbox" class="custom-control-input" id="tabswitch3">
                            <label class="custom-control-label" for="tabswitch3"></label>
                        </div>
                    </div> <!-- end col -->
                </div>
                <!-- end row-->

                <div class="row mb-2">
                    <div class="col">
                        <h5 class="m-0 font-15">Online Status</h5>
                        <p class="text-muted"><small>Show your status to all</small></p>
                    </div> <!-- end col-->
                    <div class="col-auto">
                        <div class="custom-control custom-switch mb-2">
                            <input type="checkbox" class="custom-control-input" checked id="tabswitch4">
                            <label class="custom-control-label" for="tabswitch4"></label>
                        </div>
                    </div> <!-- end col -->
                </div>
                <!-- end row-->

                <div class="alert alert-success alert-dismissible fade mt-3 show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h5>Unlimited Access</h5>
                    Upgrade to plan to get access to unlimited reports
                    <br />
                    <a href="javascript: void(0);" class="btn btn-outline-success mt-3 btn-sm">Upgrade<i
                            class="ml-1 mdi mdi-arrow-right"></i></a>
                </div>

            </div>
            <div class="tab-pane show active" id="messages1">
                <div>
                    <div class="inbox-widget">
                        <h5 class="mt-0">Recent</h5>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Tomaslau</a>
                            </p>
                            <p class="inbox-item-text">I've finished it! See you so...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="away user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);"
                                    class="text-dark">Stillnotdavid</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kurafire</a>
                            </p>
                            <p class="inbox-item-text">Nice to meet you</p>
                        </div>

                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Shahedk</a>
                            </p>
                            <p class="inbox-item-text">Hey! there I'm available...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="user-status"></i>
                            </div>
                            <p class="inbox-item-author"><a href="javascript: void(0);"
                                    class="text-dark">Adhamdannaway</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>

                        <hr />
                        <h5>Favorite <span class="float-right badge badge-pill badge-danger">18</span></h5>
                        <hr />
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kennith</a>
                            </p>
                            <p class="inbox-item-text">I've finished it! See you so...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);"
                                    class="text-dark">Stillnotdavid</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kimberling</a>
                            </p>
                            <p class="inbox-item-text">Nice to meet you</p>
                        </div>

                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="user-status"></i>
                            </div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kurafire</a>
                            </p>
                            <p class="inbox-item-text">Hey! there I'm available...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i
                                    class="away user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Leonareade</a>
                            </p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>

                        <div class="text-center mt-2">
                            <a href="javascript:void(0);" class="text-muted"><i
                                    class="mdi mdi-spin mdi-loading mr-1"></i> Load more </a>
                        </div>

                    </div> <!-- end inbox-widget -->
                </div> <!-- end .p-3-->
            </div>
        </div>
    </div> <!-- end slimscroll-menu-->
</div>
<!-- /Right-bar -->
<!-- Right bar overlay-->
<div class="rightbar-overlay"></div>
<!-- New Poject modal content -->
<div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="full-width-modalLabel"
    style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-full modal-dialog-scrollable">
        <!-- modal-content -->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="full-width-modalLabel">Create a new project</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <p class="sub-header">
                    Fill out the details of your new project.
                </p>
                <div class="row">
                    <div class="col-12">
                        <div class="p-2">
                            <form class="form-horizontal" role="form">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="project-title">Title:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="project-title"
                                            placeholder="Project title" required>
                                        <span class="help-block"><small id="warning-message"></small></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label"
                                        for="project-description">Description:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" id="project-description" rows="5"
                                            placeholder="Enter a brief description of the project"
                                            style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="project-pl">Project Leader:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="project-pl"
                                            placeholder="Enter Project Leader's name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="nas-path">NAS:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="nas-path"
                                            placeholder="Enter path to project folder on NAS">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="kanboard-url">Kanboard:</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="url" id="kanboard-url" name="kanboard-url"
                                            placeholder="Link to Project's board in Kanban">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="dev-url">Development:</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="url" id="dev-url" name="dev-url"
                                            placeholder="Link to Dev environment">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="stage-url">Staging:</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="url" id="stage-url" name="stage-url"
                                            placeholder="Link to Stage environment">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="prod-url">Production:</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="url" id="prod-url" name="prod-url"
                                            placeholder="Link to Production environment">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="live-url">Live:</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="url" id="live-url" name="live-url"
                                            placeholder="Link to Live site">
                                    </div>
                                </div>
                                <input type="submit" id="create-project-form" style="display: none">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <label for="create-project-form"
                    class="col-form-label btn btn-primary waves-effect waves-light">Submit</label>
                <button type="button" id="continue" class="col-form-label btn btn-primary waves-effect waves-light"
                    style="display: none" data-dismiss="modal">Continue</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- New Task modal content -->
<div id="full-width-modal-task" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="full-width-modalLabel"
    style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-full modal-dialog-scrollable">
        <!-- modal-content -->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="full-width-modalLabel-task">Create a new task</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <p class="sub-header">
                    Fill out the details of your new task.
                </p>
                <div class="row">
                    <div class="col-12">
                        <div class="p-2">
                            <form class="form-horizontal" role="form">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-title">Title:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="task-title" placeholder="Task title"
                                            required>
                                        <span class="help-block"><small id="warning-message"></small></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-description">Description:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" id="task-description" rows="5"
                                            placeholder="Enter a brief description of the task"
                                            style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-pl">Project Leader:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="task-pl" placeholder="Task owner">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-column">Column:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="task-column"
                                            placeholder="Task column" value="Upcoming">
                                        <span class="help-block"><small id="warning-message"></small></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-nas-path">NAS:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="task-nas-path"
                                            placeholder="Enter path to task folder on NAS">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-kanboard-url">Kanboard:</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="url" id="task-kanboard-url"
                                            name="task-kanboard-url" placeholder="Link to Task's board in Kanban">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" for="task-due-date">Due Date:</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="date" id="task-due-date" name="task-due-date">
                                    </div>
                                </div>
                                <input type="submit" id="create-task-form" style="display: none">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <label for="create-task-form"
                    class="col-form-label btn btn-primary waves-effect waves-light">Submit</label>
                <button type="button" id="task-continue" class="col-form-label btn btn-primary waves-effect waves-light"
                    style="display: none" data-dismiss="modal">Continue</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
`;
