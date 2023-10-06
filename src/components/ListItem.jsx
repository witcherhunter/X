import { Container } from "react-bootstrap";



function ListItem() {


    return (
        <Container className="d-flex flex-column list-item mt-5">
            <h2 className="list-h2 mb-4">آخرین اخبار</h2>
            <div className=" d-flex flex-row flex-wrap flex-md-nowrap justify-content-around list-cont border border-gray rounded gap-3">
                <figure className="figure ">
                    <img src='images/banner/2.jpg' className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque nam molestias, qui quidem id laborum neque officia laudantium repudiandae, </figcaption>
                </figure>
                <figure className="figure ">
                    <img src='images/banner/1.jpg' className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque nam molestias, qui quidem id laborum neque officia laudantium repudiandae, </figcaption>
                </figure>
                <figure className="figure">
                    <img src='images/banner/3.jpg' className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque nam molestias, qui quidem id laborum neque officia laudantium repudiandae, </figcaption>
                </figure>

            </div>
        </Container>
    );
}

export default ListItem;