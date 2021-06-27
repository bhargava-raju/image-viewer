import { Component } from "react";
import React from 'react'
import './Header.css'

class Header extends Component {   

    render() {
        return (
            <div class="main-header">
                <div class="main-header-logo">
                    <span id="main-header-logo-text">Image Viewer</span>
                </div>
                <div class="main-header-searcher">
                    <div>
                        <Input></Input>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;