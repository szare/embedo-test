import React, { Component } from 'react';
import Embedo from 'embedo';

const embedo = new Embedo({
    twitter: true,
    instagram: true,
    pinterest: true,
    facebook: {
        appId: '353165765519639',
        version: 'v3.2',
        xfbml: true
    },
    youtube: true
});

export default class EmbedoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <div className='embedo-item'>
                <a
                    className=""
                    key={this.props.id}
                    href={this.props.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={c => (this.container = c)}
                    id={this.props.id}
                >
                    {/* <h1>{this.props.name}</h1> */}
                </a>
            </div>
        );
    }


    componentDidMount() {
        let self = this;
        // let options = this.props["data-options"] || {};
        // let width = this.props["data-width"];
        // let height = this.props["data-height"];

        // if (width) {
        // 	options.width = width;
        // }

        // if (height) {
        // 	options.height = height;
        // }
        let options = {};
        options.maxwidth = 800;
        options.width = 800;

        embedo
            .load(document.getElementById(this.props.id),
                this.props.href, options)
            .done((data) => {
                self.setState({
                    loaded: true
                });
            })
            .fail((err) => {
            });
    }
}