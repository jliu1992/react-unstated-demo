import {
  Container
} from 'unstated';

export default class RemarkContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      remarks: ['1', '2'],
    };
    this.addRemark = this.addRemark.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRemark(remark) {
    const {
      remarks
    } = this.state;
    remarks.push(remark);
    this.setState({
      remarks
    });
  }

  delete(remark) {
    const {
      remarks
    } = this.state;
    this.setState({
      remarks: remarks.filter(item => item !== remark)
    });
  }
}