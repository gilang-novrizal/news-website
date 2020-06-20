import React from "react";
import Axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Input,
  FormGroup,
  Label,
} from "reactstrap";

const url = "http://newsapi.org/v2/top-headlines?country=";
const cat = "&category=";
let country = "id";
let category = "general";
const key = "&apiKey=9aad61ffded440ba98c05d75f1edac4e";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      country: "id",
      category: "general",
    };
  }
  componentDidMount() {
    Axios.get(url + country + cat + category + key)
      .then((res) => {
        this.setState({ data: res.data.articles });
        console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    Axios.get(url + country + cat + category + key)
      .then((res) => {
        this.setState({ data: res.data.articles });
        console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }
  renderCard() {
    return this.state.data.map((item) => {
      return (
        <Card
          style={{ flexBasis: "30%", background: "black", color: "white" }}
          className="mb-5"
        >
          <CardImg
            height="250px"
            src={item.urlToImage}
            alt="article-img"
          ></CardImg>
          <CardBody>
            <CardTitle style={{ fontWeight: "700" }}>{item.title}</CardTitle>
            <CardText>{item.description}</CardText>
            <Button type="button" href={item.url}>
              Read more...
            </Button>
          </CardBody>
        </Card>
      );
    });
  }
  renderCategory = () => {
    category = this.newscategory.value;
    console.log(this.newscategory.value);
  };
  render() {
    return (
      <div>
        <h1>This is home</h1>

        <Input
          type="select"
          innerRef={(newscategory) => (this.newscategory = newscategory)}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="sciece">Sciece</option>
        </Input>
        <button type="button" onClick={this.renderCategory}>
          GO
        </button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {this.renderCard()}
        </div>
      </div>
    );
  }
}
export default Home;
