import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            txtUser : '',
            txtPass : '',
            sltLevel : 1
        };
    }
    
    changeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });

    }

    submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        
        const {txtUser,txtPass,sltLevel} = this.state;

        const item = {};
        item.id = uuidv4();
        item.username = txtUser;
        item.password = txtPass;
        item.level = parseInt(sltLevel,10);

        this.props.add(item);
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="alert alert-danger" role="alert">
                    <strong>Lỗi </strong> Vui lòng nhập
                </div>
                <div className="alert alert-success" role="alert">
                    <strong>Thông báo </strong> Thành công
                </div>
                <div className="card">
                    <div className="card-header">
                        Thêm
                        <button type="button" className="close" aria-label="Close" onClick={ (e) => this.props.formToogle(e) }>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="card-block">
                        <form method="POST" onSubmit={ (e) => this.submitForm(e) }>
                            <div className="form-group">
                                <label htmlFor="txtUser">Thành Viên</label>
                                <input type="text" name="txtUser" className="form-control" placeholder="Nhập Thành Viên" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPass">Mật Khẩu</label>
                                <input type="password" name="txtPass" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sltLevel">Quyền</label>
                                <select className="form-control" value={ this.state.sltLevel } name="sltLevel" onChange={ (e) => this.changeInput(e) }>
                                    <option value={1}>Quản Trị Viên</option>
                                    <option value={2}>Thành Viên</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;