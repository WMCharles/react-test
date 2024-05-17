export default function Contact() {
    return (
        <div className="mt-2">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Kindly use valid email!</strong>
                <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <h2 className="mb-2">Email us</h2>
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Upload Files</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                </div>

            </div>
        </div>
    )
}
