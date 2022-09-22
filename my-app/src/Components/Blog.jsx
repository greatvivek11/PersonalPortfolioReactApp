import {  Blog1,Blog2} from "./strings.jsx";

export default function Blog() {
    return (
        <div className="blog" style={{paddingTop:"8%"}}>
            <p>{Blog1}</p>
            <p>{Blog2}</p>
            <p>Meanwhile, follow my Wordpress blog here - <a target="_blank"  href="https://vivekkaushikblog.wordpress.com/">My Blog</a></p>
        </div>
    )
}
