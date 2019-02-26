import React from 'react';

import IconSettings from '~/components/icon-settings';
import Input from '~/components/input'; // `~` is replaced with design-system-react at runtime
import InputIcon from '~/components/icon/input-icon'; // `~` is replaced with design-system-react at runtime
import Icon from '~/components/icon'; // `~` is replaced with

class Example extends React.Component {
	static displayName = 'ErrorInputExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					<fieldset className="slds-form-element">
						<legend className="slds-form-element__legend slds-form-element__label">
							Select an option
						</legend>
						<ul className="slds-form-element__control">
							<li className="slds-visual-picker slds-visual-picker_vertical">
								<input
									type="radio"
									id="visual-picker-5"
									name="options"
									defaultValue="visual-picker-5"
								/>

								<span className="slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center">
									<span>
										<label htmlFor="visual-picker-5">
											<span className="slds-text-heading_medium slds-m-bottom_x-small">
												Select this item
											</span>
											<span className="slds-text-title">
												Some optional item description to help the user better
												understand what this option is about.
											</span>
										</label>
									</span>
								</span>
								<span className="slds-icon_container slds-visual-picker__text-check">
									<svg
										className="slds-icon slds-icon-text-check slds-icon_x-small"
										aria-hidden="true"
									>
										<use
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
										/>
									</svg>
								</span>
							</li>
							<li className="slds-visual-picker slds-visual-picker_vertical">
								<input
									type="radio"
									id="visual-picker-6"
									name="options"
									defaultValue="visual-picker-6"
								/>
								<label htmlFor="visual-picker-6">
									<span className="slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center">
										<span>
											<span className="slds-text-heading_medium slds-m-bottom_x-small">
												Select this item
											</span>
											<span className="slds-text-title">
												Some optional item description to help the user better
												understand what this option is about.
											</span>
										</span>
									</span>
									<Icon
										containerClassName="slds-visual-picker__text-check slds-icon_container"
										className="slds-icon-text-check"
										assistiveText={{ label: 'Check' }}
										category="utility"
										inverse
										name="check"
										size="x-small"
									/>
								</label>
							</li>
						</ul>
					</fieldset>
				</div>
			</IconSettings>
		);
	}
}

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
