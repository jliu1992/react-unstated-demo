import React, { Component } from 'react';
import {
  List, Skeleton,
} from 'antd';
import { Subscribe } from 'unstated';

import RemarkContext from '../context/remark';

class RemarkList extends Component {
  render() {
    return (
      <Subscribe to={[RemarkContext]}>
        {(context) => (
          <List
            itemLayout="horizontal"
            dataSource={context.state.remarks}
            renderItem={item => (
              <List.Item actions={[<a onClick={() => context.delete(item)}>delete</a>]}>
                <Skeleton title={false} loading={false} active>
                  <div>{item}</div>
                </Skeleton>
              </List.Item>
            )}
          />
        )}
      </Subscribe>
    );
  }
}

export default RemarkList;