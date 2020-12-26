import React from 'react';
import Carousel from "react-material-ui-carousel";
import './style/Example.scss';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
    InputLabel,
    Select,
    MenuItem 
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <CardContent className="Content">
                        <Typography className="Title">
                            {item.Name}
                        </Typography>

                        <Typography className="Caption">
                            {item.price}
                        </Typography>

                    </CardContent>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}





class CarouselSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 0,
            animation: "fade",
            indicators: true,
            timeout: 0,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            category:null,
            newItems:[],
            items:[
                {
                    Name: "Electronics",
                    Caption: "Electrify your friends!",
                    contentPosition: "left",
                    Category: "EC",
                    Items: [
                        {
                            Name: "Macbook Pro",
                            Price: "10000",
                            Image: "/assets/images/1.jpg"
                        },
                        {
                            Name: "iPhone",
                            Price: "10000",
                            Image: "./assets/images/1.jpg"
                        }
                    ]
                },
                {
                    Name: "Home Appliances",
                    Caption: "Say no to manual home labour!",
                    contentPosition: "middle",
                    Category: "HOME",
                    Items: [
                        {
                            Name: "Washing Machine WX9102",
                            Price: "10000",
                            Image: "./assets/images/1.jpg"
                        },
                        {
                            Name: "Learus Vacuum Cleaner",
                            Price: "10000",
                            
                            Image: "./assets/images/1.jpg"
                        }
                    ]
                },
                {
                    Name: "Decoratives",
                    Caption: "Give style and color to your living room!",
                    contentPosition: "right",
                    Category: "DEC",
                    Items: [
                        {
                            Name: "Living Room Lamp",
                            Price: "10000",
                            Image: "https://source.unsplash.com/featured/?lamp"
                        },
                        {
                            Name: "Floral Vase",
                            Price: "10000",
                            Image: "https://source.unsplash.com/featured/?vase"
                        }
                    ]
                }
            ]
        }
        

    }


  handleChange = (event) => {
    this.items=this.state.newItems.filter(item=>item.Category==event.target.value);
    this.setState({items:this.items,category:event.target.value});
  };

    render() {
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <h2>
                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={'EC'}>Electronics</MenuItem>
                        <MenuItem value={'HOME'}>Home Appliances</MenuItem>
                        <MenuItem value={'DEC'}>Decoratives</MenuItem>
                    </Select>
                </h2>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        this.state.items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default CarouselSlider;