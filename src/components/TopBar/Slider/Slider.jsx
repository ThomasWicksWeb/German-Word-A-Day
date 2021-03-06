import React, { Component } from 'react';
import styles from './Slider.module.scss';
import classnames from 'classnames';

class Slider extends Component {

    state = {
        isDark: false,
        currentHourOfDay: new Date().getHours()
    }

    render(){
        return(
            <div>
                <label className={ styles.switch }>
                    <input ref="darkModeSliderBtn" type="checkbox" onClick={this.darken} />
                    <span className={ classnames(styles.round, styles.slider) }>&nbsp;</span>
                </label>
            </div>
        )
    }

    // Check for current hour of the day when the component is loaded
    // Turns on dark mode accordingly
    componentDidMount(){
        if (this.state.currentHourOfDay <= 5 || this.state.currentHourOfDay >= 20) {
            this.darken();
            this.refs.darkModeSliderBtn.checked = true;
            this.setState({isDark: true})
        };
    }

    // Toggles dark mode and updates component's state accordingly
    darken = () => {
        if(this.state.isDark === true){
            this.setState({isDark: false});
        } else {
            this.setState({isDark: true});
        }
        // Apply dark background color
        document.querySelectorAll('body').forEach(e => e.classList.toggle('darkBG'));
        // Off-shade footer BG
        document.querySelectorAll('footer').forEach(e => e.classList.toggle('darkBGLight'));
        // Strengthens orange colors on the page behind text
        document.querySelectorAll('.text-highlight').forEach(e => e.classList.toggle('bannerTextDark'));
        // All general text on the page
        document.querySelectorAll('p, a, button, span, label, strong, h3, h2, .is-size-3, .is-size-4, .is-size-5, .is-size-6').forEach(e => e.classList.toggle('darkText'));

      }
}


export default Slider