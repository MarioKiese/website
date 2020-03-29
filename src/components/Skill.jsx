import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skill extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{display: 'flex'}}>
                        {this.props.skill}
                    </div>
                </Cell>
                <Cell style={{display: 'flex'}} col={8}>
                    <ProgressBar style={{margin: 'auto', width: '100%'}} progress={this.props.progress} />
                </Cell>
            </Grid>
        )
    }
}