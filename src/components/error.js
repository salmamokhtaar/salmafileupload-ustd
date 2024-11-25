const ErrorMessage = (probs) => {
    return ( 
        <div className="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
									<div className="d-flex align-items-center">
										<div className="font-35 text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
										</div>
										<div className="ms-3">
											<h6 className="mb-0 text-dark">Error</h6>
											<div className="text-dark">{probs.msg}</div>
										</div>
									</div>
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
     );
}
 
export default ErrorMessage;