const kanboardBody = `<!-- start kanboard -->
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
                                        <p class="m-b-10"><strong>Created : </strong>&nbsp;&nbsp;&nbsp;&nbsp; <span
                                                id="project-date-create-display" class="float-right"></span></p>
                                        <p class="m-b-10"><strong>Status : </strong> <span class="float-right"><span
                                                    id="project-status-display" class=""></span></span></p>
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
                                        <input id="project-nas-display" type="text" class="form-control"
                                            placeholder="NAS Path" aria-label="NAS Path"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button id="project-nas-copy-display"
                                                class="btn btn-dark waves-effect waves-light"
                                                type="button">Copy</button>
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
                                            <a id="project-dev-link-display" href="javascript: void(0);"
                                                class="btn btn-xs btn-secondary" target="_blank"><i
                                                    class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 class="m-0 font-weight-normal">Staging</h5>
                                        </td>
                                        <td id="project-stage-display"></td>
                                        <td>
                                            <a id="project-stage-link-display" href="javascript: void(0);"
                                                class="btn btn-xs btn-secondary" target="_blank"><i
                                                    class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 class="m-0 font-weight-normal">Production</h5>
                                        </td>
                                        <td id="project-prod-display"></td>
                                        <td>
                                            <a id="project-prod-link-display" href="javascript: void(0);"
                                                class="btn btn-xs btn-secondary" target="_blank"><i
                                                    class="mdi mdi-arrow-top-right-bold-outline"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 class="m-0 font-weight-normal">Live</h5>
                                        </td>
                                        <td id="project-live-display"></td>
                                        <td>
                                            <a id="project-live-link-display" href="javascript: void(0);"
                                                class="btn btn-xs btn-secondary" target="_blank"><i
                                                    class="mdi mdi-arrow-top-right-bold-outline"></i></a>
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
                                    <a id="project-delete-display" href="#"
                                        class="btn btn-danger waves-effect waves-light">Delete Project</a>
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
                                        <p class="m-b-10"><strong>Created : </strong>&nbsp;&nbsp;&nbsp;&nbsp; <span
                                                id="task-date-create-display" class="float-right"></span></p>
                                        <p class="m-b-10"><strong>Column : </strong> <span class="float-right"><span
                                                    id="task-column-display" class=""></span></span>
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
                                        <input id="task-nas-display" type="text" class="form-control"
                                            placeholder="NAS Path" aria-label="NAS Path"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button id="task-nas-copy-display"
                                                class="btn btn-dark waves-effect waves-light"
                                                type="button">Copy</button>
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
                                    <input id="task-link-title-submit" type="text" class=" form-control"
                                        placeholder="Enter new Link Title">
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input id="task-link-url-submit" type="text" class="form-control"
                                            placeholder="Enter new Link URL" aria-label="NAS Path"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button id="task-link-submit" class="btn btn-dark waves-effect waves-light"
                                                type="button">Submit</button>
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
                                <textarea id="task-note-content-submit" type="text" class="form-control"
                                    placeholder="Enter a new note" aria-label="New Note"
                                    aria-describedby="basic-addon2"></textarea>
                                <div class="input-group-append">
                                    <button id="task-note-submit" class="btn btn-dark waves-effect waves-light"
                                        type="button">Submit</button>
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
                                    <a id="task-delete-display" href="#"
                                        class="btn btn-danger waves-effect waves-light">Delete Task</a>
                                </div>
                            </div>
                            <!-- end .Delete Task placeholder-->
                        </div>
                        <!-- end card-box -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end task details -->               
                `;

export default kanboardBody;
