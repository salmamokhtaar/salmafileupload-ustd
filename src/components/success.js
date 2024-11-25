const SuccessMessage = (probs) => {
    return ( 
        <div className="alert alert-success border-0 bg-success alert-dismissible fade show py-2">
									<div className="d-flex align-items-center">
										<div className="font-35 text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
										</div>
										<div className="ms-3">
											<h6 className="mb-0 text-dark">Success</h6>
											<div className="text-dark">{probs.msg}</div>
										</div>
									</div>
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
     );
}
 
export default SuccessMessage;