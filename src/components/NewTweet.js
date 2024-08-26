export default function NewTweet(){
    return (
        <>
            <div className="top">
                <div className="left">
                    <img src="https://images.unsplash.com/photo-1519114563721-eb52c00b9129?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="brand"/>
                    <h1>
                        Welcome Back!
                    </h1>
                    <p>What's up?</p>
                    <textarea className="form-control my-3">
                    </textarea>
                    <div>
                        <input type="button" className="btn btn-primary" value="Post" />
                    </div>
                </div>
            </div>
        </>
    )
}