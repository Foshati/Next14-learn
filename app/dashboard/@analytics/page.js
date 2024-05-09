import Link from "next/link";
import React from "react";

export default function Analytics() {
  return (
    <div>
      <div className="shadow stats stats-vertical">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="m-4">
        <Link className="text-red-600" href="/dashboard/chart">
          {" > go to chart"}
        </Link>
      </div>
    </div>
  );
}
