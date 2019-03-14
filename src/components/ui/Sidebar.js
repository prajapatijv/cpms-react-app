import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () =>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <FontAwesomeIcon icon="igloo" />
                        Dashboard <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <FontAwesomeIcon icon="igloo" />
                        Users <span class="sr-only">(current)</span>
                    </a>
                </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <FontAwesomeIcon icon="igloo" />
                        Report 1 <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">
                    <FontAwesomeIcon icon="igloo" />
                    Report 2 <span class="sr-only">(current)</span>
                </a>
            </li>
            </ul>
        </div>
    </nav>

export default Sidebar