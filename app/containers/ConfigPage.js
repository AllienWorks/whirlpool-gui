// @flow
import React, { Component } from 'react';
import * as Icon from 'react-feather';
import cliService from '../services/cliService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { CLI_CHECKSUM, CLI_FILENAME } from '../const';
import { API_VERSION } from '../services/backendService';

type Props = {};

export default class ConfigPage extends Component<Props> {

  constructor(props) {
    super(props)

    this.onResetConfig = this.onResetConfig.bind(this)
  }

  onResetConfig() {
    if (confirm('This will reset GUI configuration. Are you sure?')) {
      cliService.resetConfig()
    }
  }

  render() {
    return (
      <div>
        <h1>Configuration</h1>

        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Setup mode</label>
            <div className="col-sm-8">
              {cliService.isCliLocal() && <div>
                <strong>Standalone (run CLI from GUI)</strong>
              </div>}
              {!cliService.isCliLocal() && <div>
                <strong>Remote DOJO / CLI</strong> - {cliService.getCliUrl()}
              </div>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Network</label>
            <div className="col-sm-8">
              <select className="form-control" id="exampleFormControlSelect1" disabled>
                <option>Testnet</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">TOR</label>
            <div className="col-sm-8">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" disabled/>
                <label className="form-check-label" htmlFor="inlineCheckbox1">Enable TOR (coming soon)</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-5">
              <button type='button' className='btn btn-danger' onClick={this.onResetConfig}><FontAwesomeIcon icon={Icons.faExclamationTriangle} /> Reset GUI configuration</button>
            </div>
            <div className="col-sm-5">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
