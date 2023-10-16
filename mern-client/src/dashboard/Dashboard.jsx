import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
        <Link to="/admin/dashboard/upload">Upload</Link>
    </div>
  )
}
