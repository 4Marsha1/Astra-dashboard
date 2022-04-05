import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import HomeComponent from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import { fetchUser, saveUser } from '../redux/actions/profile';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 'Home',
            isModalOpen: false,
            modalType: 'resume',
            resume: '',
            profile: '',
            name: '',
            country: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            span: '',
            title: '',
            availability: ''
        }
    }

    async componentDidMount() {
        await this.props.fetchUser();
        const user = this.props.user;
        this.setState({
            ...this.state,
            name: user.name,
            profile: user.profile,
            resume: user.resume,
            country: user.country,
            email: user.email,
            phone: user.phone,
            linkedin: user.linkedin,
            github: user.github,
            span: user.span,
            title: user.title,
            availability: user.availability
        });
    }

    handleClick = (value) => {
        this.setState({ ...this.state, currentScreen: value })
    }
    toggleModal = (value) => {
        this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen, modalType: value })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
    }
    saveChange = (e, value) => {
        e.preventDefault();
        this.props.saveUser(value, this.state);
        this.props.fetchUser();
    }

    render() {
        return (
            <>
                <Sidebar handleClick={this.handleClick} />
                {
                    this.state.currentScreen === 'Home' ? <HomeComponent />
                        : <ProfileComponent
                            isModalOpen={this.state.isModalOpen}
                            modalType={this.state.modalType}
                            resume={this.state.resume}
                            name={this.state.name}
                            country={this.state.country}
                            email={this.state.email}
                            phone={this.state.phone}
                            linkedin={this.state.linkedin}
                            github={this.state.github}
                            span={this.state.span}
                            title={this.state.title}
                            availability={this.state.availability}
                            toggleModal={this.toggleModal}
                            handleChange={this.handleChange}
                            saveChange={this.saveChange}
                        />
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser()),
        saveUser: (value, state) => dispatch(saveUser(value, state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);