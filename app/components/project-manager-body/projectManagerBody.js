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
                <div id="search-results" class="dropdown-menu" x-placement="bottom-start" style="position: relative;will-change: transform;top: 0px;left: 0px;transform: translate3d(0px, 70px, 0px);">
                    <div class="dropdown-divider" style="display: none;"></div>
                    <!-- items-->
                </div>
            </li>            

            <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
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
                <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img alt="user-image" class="rounded-circle user-avatar">
                    <span class="pro-user-name ml-1"><span class="user-name"></span>
                         <i class="mdi mdi-chevron-down"></i> 
                    </span>
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
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
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
                <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    Create New
                    <i class="mdi mdi-chevron-down"></i> 
                </a>
                <div class="dropdown-menu">
                    <!-- item-->
                    <a id="new-project" href="javascript:void(0);" class="dropdown-item" data-toggle="modal" data-target="#full-width-modal">
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
                                <a id="overview-link" href="#" class="active">Overview</a>
                            </li>
                            <li id="project-menu" style="display: block; ">
                                <a href="javascript: void(0);" aria-expanded="false">
                                    <span id="project-title-placeholder"></span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul id="project-menu-dropdown" class="nav-third-level nav mm-collapse" aria-expanded="false" style="height: 0px;">
                                    <li>
                                        <a id="" href="javascript: void(0);">Kanboard</a>
                                    </li>
                                    <li>
                                        <a id="project-details-link" data-anchor="" href="javascript: void(0);">Details</a>
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
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-kanbanboard.html" class="active">Kanban Board</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-companies.html">Companies</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-calendar.html">Calendar</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-filemanager.html">File Manager</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-tickets.html">Tickets</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/apps-team.html">Team Members</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="waves-effect">
                            <i class="remixicon-layout-line"></i>
                            <span class="badge badge-pink float-right">New</span>
                            <span> Layouts </span>
                        </a>
                        <ul class="nav-second-level mm-collapse" aria-expanded="false">
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-sidebar-sm.html">Small Sidebar</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-dark-sidebar.html">Dark Sidebar</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-light-topbar.html">Light Topbar</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-preloader.html">Preloader</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-sidebar-collapsed.html">Sidebar Collapsed</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/layouts-boxed.html">Boxed</a>
                            </li>
                        </ul>
                    </li>
        
                    <li>
                        <a href="javascript: void(0);" class="waves-effect">
                            <i class="remixicon-mail-open-line"></i>
                            <span> Email </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level mm-collapse" aria-expanded="false">
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/email-inbox.html">Inbox</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/email-read.html">Read Email</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/email-compose.html">Compose Email</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/email-templates.html">Email Templates</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="waves-effect">
                            <i class="remixicon-file-copy-2-line"></i>
                            <span> Pages </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level mm-collapse" aria-expanded="false">
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-starter.html">Starter</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-login.html">Log In</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-register.html">Register</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-recoverpw.html">Recover Password</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-lock-screen.html">Lock Screen</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-logout.html">Logout</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-confirm-mail.html">Confirm Mail</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-404.html">Error 404</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-404-alt.html">Error 404-alt</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/pages-500.html">Error 500</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="waves-effect">
                            <i class="remixicon-pages-line"></i>
                            <span> Extra Pages </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level mm-collapse" aria-expanded="false">
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-profile.html">Profile</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-timeline.html">Timeline</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-invoice.html">Invoice</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-faqs.html">FAQs</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-tour.html">Tour Page</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-pricing.html">Pricing</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-maintenance.html">Maintenance</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                                <a href="https://coderthemes.com/minton/layouts/vertical/blue/extras-gallery.html">Gallery</a>
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

                <!-- start kanboard -->
                <div id="kanboard-placeholder" class="row">
                    <div class="col-lg-4">
                        <div class="card-box">
                            <div class="dropdown float-right">
                                <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                    <a class="dropdown-item" href="#">Add Members</a>
                                    <a class="dropdown-item" href="#">Add Due Date</a>
                                </div>
                            </div> <!-- end dropdown -->
                            
                            <h4 class="header-title">Upcoming</h4>
                            <p class="sub-header"></p>

                            <ul class="sortable-list tasklist list-unstyled ui-sortable" id="upcoming"></ul>
                            <a href="javascript: void(0);" class="btn btn-primary btn-block mt-3 waves-effect waves-light d-none new-task" data-label="Upcoming" data-toggle="modal" data-target="#full-width-modal-task"><i class="mdi mdi-plus-circle"></i> Add New</a>
                        </div>
                    </div> <!-- end col -->

                    <div class="col-lg-4">
                        <div class="card-box">
                            <div class="dropdown float-right">
                                <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                    <a class="dropdown-item" href="#">Add Members</a>
                                    <a class="dropdown-item" href="#">Add Due Date</a>
                                </div>
                            </div> <!-- end dropdown -->

                            <h4 class="header-title">In Progress</h4>
                            <p class="sub-header"></p>

                            <ul class="sortable-list tasklist list-unstyled ui-sortable" id="inprogress"></ul>
                            <a href="javascript: void(0);" class="btn btn-primary btn-block mt-3 waves-effect waves-light d-none new-task" data-label="In Progress" data-toggle="modal" data-target="#full-width-modal-task"><i class="mdi mdi-plus-circle"></i> Add New</a>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->

                    <div class="col-lg-4">
                        <div class="card-box">
                            <div class="dropdown float-right">
                                <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                    <a class="dropdown-item" href="#">Add Members</a>
                                    <a class="dropdown-item" href="#">Add Due Date</a>
                                </div>
                            </div> <!-- end dropdown -->

                            <h4 class="header-title">Completed</h4>
                            <p class="sub-header"></p>

                            <ul class="sortable-list tasklist list-unstyled ui-sortable" id="completed"></ul>
                            <a href="javascript: void(0);" class="btn btn-primary btn-block mt-3 waves-effect waves-light d-none new-task" data-label="Completed" data-toggle="modal" data-target="#full-width-modal-task"><i class="mdi mdi-plus-circle"></i> Add New</a>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->

                </div>
                <!-- end row -->

                <!-- start project details -->
                <div id="project-details-placeholder" style="display: none" class="row">
                        <div class="col-12">
                           <div class="card-box">
                              <!-- Logo & title -->
                              <div class="clearfix">
                                 <div class="float-left">
                                    <h4 id="project-title-display" class="m-0 d-print-none"></h4>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-6">
                                    <div class="mt-3">
                                       <p><b>Project Leader: <span id="project-pl-display"></span></b></p>
                                       <p id="project-description-display" class="text-muted"></p>
                                    </div>
                                 </div>
                                 <!-- end col -->
                                 <div class="col-md-4 offset-md-2">
                                    <div class="mt-3 float-right">
                                       <p class="m-b-10"><strong>Created : </strong>&nbsp;&nbsp;&nbsp;&nbsp;  <span id="project-date-create-display" class="float-right"></span></p>
                                       <p class="m-b-10"><strong>Status : </strong> <span class="float-right"><span id="project-status-display" class=""></span></span></p>
                                    </div>
                                 </div>
                                 <!-- end col -->
                              </div>
                              <!-- end row -->
                              <hr>
                              <div class="form-group row mb-0">
                                 <label class="col-sm-2 col-form-label">NAS Path:</label>
                                 <div class="col-sm-10">
                                    <div class="input-group">
                                       <input id="project-nas-display" type="text" class="form-control" placeholder="NAS Path" aria-label="NAS Path" aria-describedby="basic-addon2" >
                                       <div class="input-group-append">
                                          <button id="project-nas-copy-display" class="btn btn-dark waves-effect waves-light" type="button">Copy</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <hr>
                              <h4 class="header-title mt-3 mb-3">Links:</h4>
                              <table class="table table-borderless table-hover table-centered m-0">
                                 <thead class="thead-light">
                                    <tr>
                                       <th>Title</th>
                                       <th>URL</th>
                                       <th>Go To</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>
                                          <h5 class="m-0 font-weight-normal">Development</h5>
                                       </td>
                                       <td id="project-dev-display"></td>
                                       <td>
                                          <a id="project-dev-link-display" href="javascript: void(0);" class="btn btn-xs btn-secondary" target="_blank"><i class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <h5 class="m-0 font-weight-normal">Staging</h5>
                                       </td>
                                       <td id="project-stage-display"></td>
                                       <td>
                                          <a id="project-stage-link-display" href="javascript: void(0);" class="btn btn-xs btn-secondary" target="_blank"><i class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <h5 class="m-0 font-weight-normal">Production</h5>
                                       </td>
                                       <td id="project-prod-display"></td>
                                       <td>
                                          <a id="project-prod-link-display" href="javascript: void(0);" class="btn btn-xs btn-secondary" target="_blank"><i class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <h5 class="m-0 font-weight-normal">Live</h5>
                                       </td>
                                       <td id="project-live-display"></td>
                                       <td>
                                          <a id="project-live-link-display" href="javascript: void(0);" class="btn btn-xs btn-secondary" target="_blank"><i class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <hr>
                              <h4 class="header-title mt-3 mb-3">Tasks:</h4>
                              <div class="table-responsive">
                                 <table class="table table-borderless table-hover table-centered m-0">
                                    <thead class="thead-light">
                                       <tr>
                                          <th>Title</th>
                                          <th>Created</th>
                                          <th>Due Date</th>
                                          <th>Remaining</th>
                                          <th>Column</th>
                                          <th>Go To</th>
                                       </tr>
                                    </thead>
                                    <tbody id="project-task-list-display"></tbody>
                                 </table>
                              </div>
                              <!-- end .table-responsive-->
                              <div class="mt-4 mb-1">
                                <div class="text-right d-print-none">
                                    <a id="project-delete-display" href="#" class="btn btn-danger waves-effect waves-light">Delete Project</a>
                                </div>
                                </div>
                                <!-- end .Delete Project placeholder-->
                           </div>
                           <!-- end card-box -->
                        </div>
                        <!-- end col -->
                </div>
                <!-- end project details -->

                <!-- start task details -->
                <div id="task-details-placeholder" style="display: none" class="row">
                    <div class="col-12">
                        <div class="card-box">
                            <!-- Logo & title -->
                            <div class="clearfix">
                                <div class="float-left">
                                    <h4 id="task-title-display" class="m-0 d-print-none"></h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mt-3">
                                        <p><b>Project Leader: <span id="task-pl-display"></span></b></p>
                                        <p id="task-description-display" class="text-muted"></p>
                                    </div>
                                </div>
                                <!-- end col -->
                                <div class="col-md-4 offset-md-2">
                                    <div class="mt-3 float-right">
                                        <p class="m-b-10"><strong>Created : </strong>&nbsp;&nbsp;&nbsp;&nbsp; <span id="task-date-create-display" class="float-right"></span></p>
                                        <p class="m-b-10"><strong>Column : </strong> <span class="float-right"><span id="task-column-display" class=""></span></span>
                                        </p>
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
                            <!-- end row -->
                            <hr>
                            <!-- NAS section start -->
                            <div class="form-group row mb-0">
                                <label class="col-sm-2 col-form-label">NAS Path:</label>
                                <div class="col-sm-10">
                                    <div class="input-group">
                                        <input id="task-nas-display" type="text" class="form-control" placeholder="NAS Path" aria-label="NAS Path" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button id="task-nas-copy-display" class="btn btn-dark waves-effect waves-light" type="button">Copy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- NAS section start -->
                            <hr>
                            <!-- Links section start -->
                            <h4 class="header-title mt-3 mb-3">Links:</h4>
                            <table class="table table-borderless table-hover table-centered m-0">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Title</th>
                                        <th>URL</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="task-link-list-display">
                                    
                                </tbody>
                            </table>
                            <hr>
                            <div class="form-group row mb-0">
                                <div class="col-md-6">
                                    <input id="task-link-title-submit" type="text" class=" form-control" placeholder="Enter new Link Title">
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input id="task-link-url-submit" type="text" class="form-control" placeholder="Enter new Link URL" aria-label="NAS Path" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button id="task-link-submit" class="btn btn-dark waves-effect waves-light" type="button">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Links section end -->
                            <hr>
                            <!-- Notes section start -->
                            <h4 class="header-title mt-3 mb-3">Notes:</h4>
                            <div id="task-notes-list-display"></div>
                            <div class="input-group">
                                <textarea id="task-note-content-submit" type="text" class="form-control" placeholder="Enter a new note" aria-label="New Note" aria-describedby="basic-addon2"></textarea>
                                <div class="input-group-append">
                                    <button id="task-note-submit" class="btn btn-dark waves-effect waves-light" type="button">Submit</button>
                                </div>
                            </div>
                            <!-- Notes section end -->
                            <hr>
                            <!-- Sub-task section start -->
                            <h4 class="header-title mt-3 mb-3">Sub-Tasks:</h4>
                            <div class="table-responsive">
                                <table class="table table-borderless table-hover table-centered m-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Title</th>
                                            <th>Created</th>
                                            <th>Due Date</th>
                                            <th>Remaining</th>
                                            <th>Column</th>
                                            <th>Go To</th>
                                        </tr>
                                    </thead>
                                    <tbody id="task-sub-task-list-display"></tbody>
                                </table>
                            </div>
                            <!-- Sub-task section end -->
                            <!-- end .table-responsive-->
                            <div class="mt-4 mb-1">
                                <div class="text-right d-print-none">
                                    <a id="task-delete-display" href="#" class="btn btn-danger waves-effect waves-light">Delete Task</a>
                                </div>
                            </div>
                            <!-- end .Delete Task placeholder-->
                        </div>
                        <!-- end card-box -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end task details -->

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
                    <br/>
                    <a href="javascript: void(0);" class="btn btn-outline-success mt-3 btn-sm">Upgrade<i class="ml-1 mdi mdi-arrow-right"></i></a>
                </div>
        
            </div>
            <div class="tab-pane show active" id="messages1">
                <div>
                    <div class="inbox-widget">
                        <h5 class="mt-0">Recent</h5>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Tomaslau</a></p>
                            <p class="inbox-item-text">I've finished it! See you so...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="away user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Stillnotdavid</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kurafire</a></p>
                            <p class="inbox-item-text">Nice to meet you</p>
                        </div>

                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Shahedk</a></p>
                            <p class="inbox-item-text">Hey! there I'm available...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Adhamdannaway</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>

                        <hr/>
                        <h5>Favorite <span class="float-right badge badge-pill badge-danger">18</span></h5>
                        <hr/>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kennith</a></p>
                            <p class="inbox-item-text">I've finished it! See you so...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="busy user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Stillnotdavid</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="online user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kimberling</a></p>
                            <p class="inbox-item-text">Nice to meet you</p>
                        </div>

                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Kurafire</a></p>
                            <p class="inbox-item-text">Hey! there I'm available...</p>
                        </div>
                        <div class="inbox-item">
                            <div class="inbox-item-img"><img class="rounded-circle" alt=""> <i class="away user-status"></i></div>
                            <p class="inbox-item-author"><a href="javascript: void(0);" class="text-dark">Leonareade</a></p>
                            <p class="inbox-item-text">This theme is awesome!</p>
                        </div>

                        <div class="text-center mt-2">
                            <a href="javascript:void(0);" class="text-muted"><i class="mdi mdi-spin mdi-loading mr-1"></i> Load more </a>
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
<div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="full-width-modalLabel" style="display: none;" aria-hidden="true">
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
                               <input type="text" class="form-control" id="project-title" placeholder="Project title" required>
                               <span class="help-block"><small id="warning-message"></small></span>
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="project-description">Description:</label>
                            <div class="col-sm-10">
                               <textarea class="form-control" id="project-description" rows="5" placeholder="Enter a brief description of the project" style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea>
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="project-pl">Project Leader:</label>
                            <div class="col-sm-10">
                               <input type="text" class="form-control" id="project-pl" placeholder="Enter Project Leader's name">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="nas-path">NAS:</label>
                            <div class="col-sm-10">
                               <input type="text" class="form-control" id="nas-path" placeholder="Enter path to project folder on NAS">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="kanboard-url">Kanboard:</label>
                            <div class="col-md-10">
                               <input class="form-control" type="url" id="kanboard-url" name="kanboard-url" placeholder="Link to Project's board in Kanban">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="dev-url">Development:</label>
                            <div class="col-md-10">
                               <input class="form-control" type="url" id="dev-url" name="dev-url" placeholder="Link to Dev environment">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="stage-url">Staging:</label>
                            <div class="col-md-10">
                               <input class="form-control" type="url" id="stage-url" name="stage-url" placeholder="Link to Stage environment">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="prod-url">Production:</label>
                            <div class="col-md-10">
                               <input class="form-control" type="url" id="prod-url" name="prod-url" placeholder="Link to Production environment">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="live-url">Live:</label>
                            <div class="col-md-10">
                               <input class="form-control" type="url" id="live-url" name="live-url" placeholder="Link to Live site">
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
             <label for="create-project-form" class="col-form-label btn btn-primary waves-effect waves-light">Submit</label>
             <button type="button" id="continue" class="col-form-label btn btn-primary waves-effect waves-light" style="display: none" data-dismiss="modal">Continue</button>
          </div>
       </div>
       <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
 </div>
 <!-- /.modal -->

 <!-- New Task modal content -->
<div id="full-width-modal-task" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="full-width-modalLabel" style="display: none;" aria-hidden="true">
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
                               <input type="text" class="form-control" id="task-title" placeholder="Task title" required>
                               <span class="help-block"><small id="warning-message"></small></span>
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="task-description">Description:</label>
                            <div class="col-sm-10">
                               <textarea class="form-control" id="task-description" rows="5" placeholder="Enter a brief description of the task" style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea>
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
                               <input type="text" class="form-control" id="task-column" placeholder="Task column" value="Upcoming">
                               <span class="help-block"><small id="warning-message"></small></span>
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="task-nas-path">NAS:</label>
                            <div class="col-sm-10">
                               <input type="text" class="form-control" id="task-nas-path" placeholder="Enter path to task folder on NAS">
                            </div>
                         </div>
                         <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="task-kanboard-url">Kanboard:</label>
                            <div class="col-sm-10">
                               <input class="form-control" type="url" id="task-kanboard-url" name="task-kanboard-url" placeholder="Link to Task's board in Kanban">
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
             <label for="create-task-form" class="col-form-label btn btn-primary waves-effect waves-light">Submit</label>
             <button type="button" id="task-continue" class="col-form-label btn btn-primary waves-effect waves-light" style="display: none" data-dismiss="modal">Continue</button>
          </div>
       </div>
       <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
 </div>
 <!-- /.modal -->
`;
