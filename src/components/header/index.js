/**
 * You shouldn't have to modify any of this file
 */

import React from "react";
import "./header.css";

export default function Header({ language, setLanguage }) {
	return <div className="header">
		<h3>
			Venue
		</h3>
		<span className="header__dropdown">
			<label>
				Language
			</label>
			<span>
				<select
					name="language"
					value={language}
					onChange={setLanguage}
				>
					<option value="english">English</option>
					<option value="french">{"Fran\u00e7ais"}</option>
					<option value="german">Deutsche</option>
					<option value="spanish">{"Espa\u00f1ol"}</option>
				</select>
			</span>
		</span>
	</div>;
}
