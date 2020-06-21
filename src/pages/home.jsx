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
      countries: [
        { country: "argentina", code: "ar" },
        { country: "indonesia", code: "id" },
        { country: "australia", code: "au" },
        { country: "brazil", code: "br" },
        { country: "canada", code: "ca" },
        { country: "china", code: "cn" },
        { country: "colombia", code: "co" },
        { country: "egypt", code: "eg" },
        { country: "france", code: "fr" },
        { country: "germany", code: "de" },
        { country: "hong kong", code: "hk" },
        { country: "india", code: "in" },
        { country: "indonesia", code: "id" },
        { country: "israel", code: "il" },
        { country: "japan", code: "jp" },
        { country: "united kingdom", code: "gb" },
        { country: "united states", code: "us" },
      ],
      categories: [
        "general",
        "business",
        "sports",
        "technology",
        "entertainment",
        "health",
        "science",
      ],
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
        // console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }
  renderCard() {
    return this.state.data.map((item) => {
      return (
        <Card style={{ flexBasis: "30%" }} className="mb-5">
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
  categoryButton = () => {
    return this.state.categories.map((item) => {
      return (
        <Button
          type="button"
          innerRef={(newscategory) => (this.newscategory = newscategory)}
          onClick={() => this.renderCategory(item)}
        >
          {item.toUpperCase()}
        </Button>
      );
    });
  };
  renderCountry = () => {
    let newscount = this.newscountry.value;
    this.state.countries.map((item) =>
      item.country === newscount.toLowerCase() ? (country = item.code) : null
    );
  };
  renderCategory = (item) => {
    category = item;
    console.log(item);
  };
  render() {
    return (
      <div>
        <div className="mb-5">
          <Input
            type="text"
            innerRef={(newscountry) => (this.newscountry = newscountry)}
            className="my-3"
            placeholder="Search news by country"
          ></Input>
          <Button type="button" onClick={this.renderCountry}>
            Search
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {this.categoryButton()}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          className="mt-5"
        >
          {this.renderCard()}
        </div>
      </div>
    );
  }
}
export default Home;
