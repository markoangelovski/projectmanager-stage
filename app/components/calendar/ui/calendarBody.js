const calendarBody = `<!-- start calendar -->
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row">

                    <div class="col-lg-12">
                        <div id="calendar"></div>
                    </div> <!-- end col -->

                    <!-- Add Event Button -->
                    <div class="col-lg-12">
                        <a id="create-new-event" href="#" data-toggle="modal" data-target="#add-event-button"
                            class="btn btn-lg font-16 btn-success btn-block mt-1">
                            <i class="mdi mdi-plus-circle-outline"></i> Create New Event
                        </a>
                    </div> <!-- end col-->

                    <!-- Edit Events Button -->
                    <div class="col-lg-12">
                        <a id="edit-events" href="#" data-toggle="modal" data-target="#edit-events-button"
                            class="btn btn-lg font-16 btn-primary btn-block mt-1">
                            <i class="mdi mdi-plus-circle-outline"></i> Edit Events
                        </a>
                    </div> <!-- end col-->

                </div> <!-- end row -->
            </div> <!-- end card body-->
        </div> <!-- end card -->

        <!-- Modal Add Event Button -->
        <div class="modal fade" id="add-event-button" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add an event</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body p-3">
                        <form>
                            <div class="form-group">
                                <label class="control-label" for="event-title-button">Event Title</label>
                                <input class="form-control form-white" type="text" id="event-title-button"
                                    name="category-name" placeholder="Enter title" />
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-date-button">Date</label>
                                <input class="form-control form-white" type="date" id="event-date-button"
                                    name="event-date">
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-time-start">Time start</label>
                                <input class="form-control form-white" type="time" id="event-time-start-button"
                                    name="time">
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-time-end">Time end</label>
                                <input class="form-control form-white" type="time" id="event-time-end-button"
                                    name="time">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Choose Event Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..."
                                    name="category-color">
                                    <option value="primary">Primary</option>
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="warning">Warning</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </form>
                        <div class="text-right pt-2">
                            <button id="event-close-button-add-event" type="button" class="btn btn-light"
                                data-dismiss="modal">Close</button>
                            <button id="event-save-button" type="button" class="btn btn-primary ml-1 save-category"
                                data-dismiss="modal">Save</button>
                        </div>
                    </div> <!-- end modal-body-->
                </div> <!-- end modal-content-->
            </div> <!-- end modal dialog-->
        </div>
        <!-- end modal-->

        <!-- Modal Add Event Drag -->
        <div class="modal fade" id="add-event-drag" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add an event</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body p-3">
                        <form>
                            <div class="form-group">
                                <label class="control-label" for="event-title">Event Title</label>
                                <input class="form-control form-white" type="text" id="event-title-drag"
                                    name="category-name" placeholder="Enter title" />
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-date">Date</label>
                                <input class="form-control form-white" type="date" id="event-date-drag"
                                    name="event-date">
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-time-start">Time start</label>
                                <input class="form-control form-white" type="time" id="event-time-start-drag"
                                    name="time">
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="event-time-end">Time end</label>
                                <input class="form-control form-white" type="time" id="event-time-end-drag" name="time">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Choose Event Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..."
                                    name="category-color">
                                    <option value="primary">Primary</option>
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="warning">Warning</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </form>
                        <div class="text-right pt-2">
                            <button id="event-close-drag" type="button" class="btn btn-light"
                                data-dismiss="modal">Close</button>
                            <button id="event-save-drag" type="button" class="btn btn-primary ml-1 save-category"
                                data-dismiss="modal">Save</button>
                        </div>
                    </div> <!-- end modal-body-->
                </div> <!-- end modal-content-->
            </div> <!-- end modal dialog-->
        </div>
        <!-- end modal-->
        
        <!-- Modal Edit Events Button -->
        <div class="modal fade" id="edit-events-button" tabindex="-1">
            <div class="modal-dialog modal-full modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit events</h4>
                        <button id="event-x-button-edit-event" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body p-3">
                        <div class="table-responsive">
                            <table class="table mb-0">
                            <thead class="thead-light">
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody id="event-list-placeholder"></tbody>
                            </table>
                        </div>
                        <div class="text-right pt-2">
                            <button id="event-close-button-edit-event" type="button" class="btn btn-light"
                                data-dismiss="modal">Close</button>
                        </div>
                    </div> <!-- end modal-body-->
                </div> <!-- end modal-content-->
            </div> <!-- end modal dialog-->
        </div>
        <!-- end modal-->

    </div>
    <!-- end col-12 -->
</div>
<!-- end row -->`;

export default calendarBody;
