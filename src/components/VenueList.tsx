import { useState, useEffect, useCallback } from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Box,
    CircularProgress,
    IconButton,
    TablePagination,
    Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Visibility, Event } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getAllVenues } from '../api/venueApi';

const VenueList = () => {
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();

    // Fetch venue data from the backend
    const fetchVenues = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAllVenues();
            setVenues(response.data);
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch venues. Please try again later.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchVenues();
    }, [fetchVenues]);

    // Handle filter change
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        setPage(0); // Reset to the first page when the filter changes
    };

    // Filter the venues based on the input filter
    const filteredVenues = venues.filter((venue) =>
        venue.name.toLowerCase().includes(filter.toLowerCase()) ||
        venue.location.toLowerCase().includes(filter.toLowerCase())
    );

    // Handle pagination change for pages
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedVenues = filteredVenues.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const handleView = (id) => {
        navigate(`${id}`);
    };

    const handleEvents = (id) => {
        navigate(`${id}/addevents`);
    };

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ ml: 2 }}>Loading venues...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Venue List
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ mb: 2 }}
                onClick={() => navigate("/dashboard/addvenue")} // Define this function
            >
                Add Venue
            </Button>

            {/* Filter/Search Input */}
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <TextField
                    label="Filter by Name or Location"
                    variant="outlined"
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '300px' }}
                />
            </Box>

            {/* Table to display venues */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="venue table">
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell align="right">Capacity</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedVenues.length > 0 ? (
                            paginatedVenues.map((venue) => (
                                <TableRow
                                    key={venue.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {venue.name}
                                    </TableCell>
                                    <TableCell>{venue.location}</TableCell>
                                    <TableCell align="right">{venue.capacity}</TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            aria-label="view"
                                            onClick={() => handleView(venue.id)}
                                            color="primary"
                                            size="small"
                                            title="View Venue"
                                        >
                                            <Visibility />
                                        </IconButton>
                                        <IconButton
                                            aria-label="add"
                                            onClick={() => handleEvents(venue.id)}
                                            color="primary"
                                            size="small"
                                            sx={{ ml: 1 }}
                                            title="Add Events"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    <Typography variant="body1" sx={{ py: 2 }}>
                                        {loading ? 'Loading...' : (filter ? 'No venues found matching your filter.' : 'No venues available.')}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination component */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredVenues.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ mt: 2 }}
            />
        </Container>
    );
};

export default VenueList;