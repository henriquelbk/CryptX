import { generateAvatarURL } from "@cfx-kit/wallet-avatar"

export default function Post(props) {
    return (
        <>
            <div className="post">
                <img className="post_author_logo" src={generateAvatarURL(props.data.author)} />
                <div>
                    <div className="post_header">
                        <div className="post_author_name">
                            {props.data.username}
                        </div>
                        <div className="post_author_slug">
                            @{props.data.author}
                        </div>
                    </div>
                    <div className="post_publish_time">
                        at {new Date(Number(props.data.timestamp) * 1000).toLocaleString()}
                    </div>
                    <div>
                        {props.data.text}
                    </div>
                </div>
            </div>
        </>
    )
}