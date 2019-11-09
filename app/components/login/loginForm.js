export const loginForm = `
<div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
    
                        <div class="card-body p-4">
                            
                            <div class="text-center w-75 m-auto">
                                <a href="index.html">
                                    <span><i class="mdi mdi-blur" style="display: flex;justify-content: center;"></i><h1>Project-Manager</h1></span>
                                </a>
                                <p class="text-muted mb-4 mt-3">Enter your email address and password to access the awesome and amazing Project-Manager.</p>
                            </div>
    
                            <form id="login-form" action="#">
    
                                <div class="form-group mb-3">
                                    <label for="emailaddress">Email address</label>
                                    <input class="form-control" type="email" id="emailaddress" required placeholder="Enter your email">
                                </div>
    
                                <div class="form-group mb-3">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" required="" id="password" required placeholder="Enter your password">
                                    <div class="invalid-feedback">
                                        Please provide a valid email and password.
                                    </div>
                                </div>
    
                                <div class="form-group mb-3 d-none">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked="">
                                        <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                    </div>
                                </div>
    
                                <div class="form-group mb-0 text-center">
                                    <button class="btn btn-primary btn-block" type="submit"> Log In </button>
                                </div>
    
                            </form>
    
                            <div class="text-center d-none">
                                <h5 class="mt-3 text-muted">Sign in with</h5>
                                <ul class="social-list list-inline mt-3 mb-0">
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github-circle"></i></a>
                                    </li>
                                </ul>
                            </div>
    
                        </div> <!-- end card-body -->
                    </div>
                    <!-- end card -->
    
                    <div class="row mt-3 d-none">
                        <div class="col-12 text-center">
                            <p> <a href="pages-recoverpw.html" class="text-muted ml-1">Forgot your password?</a></p>
                            <p class="text-muted">Don't have an account? <a href="pages-register.html" class="text-primary font-weight-medium ml-1">Sign Up</a></p>
                        </div> <!-- end col -->
                    </div>
                    <!-- end row -->
    
                </div> <!-- end col -->
            </div>
            <!-- end row -->
        </div>
    <!-- end container -->
    </div>`;

export const spinner = `
    <div class="spinner-grow" role="status" style="height: 19px;width: 19px;">
        <span class="sr-only">Loading...</span>
    </div>`;
