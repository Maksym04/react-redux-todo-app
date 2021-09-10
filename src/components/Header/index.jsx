import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.sass';

function Header (props) {
  const { tasks } = props;

  return (
    <aside className={styles.headerBlock}>
      <span className={styles.headerText}>Todos ({tasks.length})</span>
    </aside>
  );
}

const mapStateToProps = state => state.todo;

export default connect(mapStateToProps)(Header);
