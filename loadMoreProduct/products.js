import {useState,useEffect} from "react" ;
import "./products.css" ;


function LoadMoreProduct(){
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0)

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=20&skip=${count}`)
        .then(res => res.json())
        .then(res => setData(res.products))
        .catch((err) => console.log(err));
        
    },[count])

    function text(text){
        if(text.length > 156){
            return text.slice(0,140) + "...";
        }
        return text
         
    }

    const handleClick = () => {
        setCount((prev) => prev + 20) ;
    }

    return(
        <div>
                <div className="ctc">
                    {
                        data.map((product,index) => {
                            return(
                                <div key={index} className="card" style={{width: "100%"}}>
                                    <img loading="lazy" src={product.thumbnail} className="card-img-top" alt="card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{text(product.description)}</p>
                                        <a href="#" className="btn btn-primary">Add To Card</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center">
                    <a onClick={handleClick} className="btn btn-warning mb-5">Load More Products</a>
                </div>
        </div>
    )
}

export default LoadMoreProduct ;