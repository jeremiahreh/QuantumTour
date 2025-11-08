import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Spinner, Alert } from 'react-bootstrap';
import styles from './ClientManagement.module.css';

/**
 * Displays client list with usage stats
 * API: GET /api/admin/clients
 */
const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base API URL
  const API_BASE_URL = 'https://quantum-tour-backend.onrender.com';

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/api/admin/clients`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch clients: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      // Extract clients array from the response
      if (data.clients && Array.isArray(data.clients)) {
        setClients(data.clients);
      } else if (Array.isArray(data)) {
        setClients(data);
      } else {
        setClients([]);
        console.warn('Unexpected API response format:', data);
      }
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  // Mobile card view component
  const MobileClientCard = ({ client }) => (
    <div className={styles.mobileCard}>
      <div className={styles.mobileCardContent}>
        <div className={styles.mobileCardRow}>
          <span className={styles.mobileLabel}>Client ID:</span>
          <span className={styles.mobileValue}>{client.user_id || client.id}</span>
        </div>
        <div className={styles.mobileCardRow}>
          <span className={styles.mobileLabel}>Email:</span>
          <span className={styles.mobileValue}>{client.email}</span>
        </div>
        <div className={styles.mobileCardRow}>
          <span className={styles.mobileLabel}>Joined:</span>
          <span className={styles.mobileValue}>{client.joined}</span>
        </div>
        <div className={styles.mobileCardRow}>
          <span className={styles.mobileLabel}>Orders:</span>
          <span className={styles.mobileValue}>{client.orders}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Card className={styles.adminCard}>
      {/* Header */}
      <Card.Header className={styles.cardHeader}>
        <div className={styles.headerContainer}>
          <h5 className={styles.headerTitle}>Client Management</h5>
          <Button 
            size="sm" 
            className={styles.exportButton}
            onClick={fetchClients}
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
      </Card.Header>

      <Card.Body className={styles.cardBody}>
        {error && (
          <Alert variant="danger" className={styles.alert}>
            {error}
          </Alert>
        )}

        {loading ? (
          <div className={styles.loadingContainer}>
            <Spinner animation="border" variant="light" />
            <span className={styles.loadingText}>Loading clients...</span>
          </div>
        ) : (
          <>
            <div className={`${styles.tableWrapper} ${styles.desktopView}`}>
              <Table hover responsive className={styles.clientTable}>
                <thead className={styles.tableHead}>
                  <tr className={styles.tableRowHead}>
                    <th className={styles.tableHeading}>Client ID</th>
                    <th className={styles.tableHeading}>Email</th>
                    <th className={styles.tableHeading}>Joined</th>
                    <th className={styles.tableHeading}>Orders</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {clients.map((client) => (
                    <tr key={client.user_id || client.id} className={styles.tableRow}>
                      <td data-label="Client ID" className={styles.tableCell}>{client.user_id || client.id}</td>
                      <td data-label="Email" className={styles.tableCell}>{client.email}</td>
                      <td data-label="Joined" className={styles.tableCell}>{client.joined}</td>
                      <td data-label="Orders" className={styles.tableCell}>{client.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className={styles.mobileView}>
              {clients.map((client) => (
                <MobileClientCard key={client.user_id || client.id} client={client} />
              ))}
            </div>

            {clients.length === 0 && !loading && (
              <div className={styles.noData}>
                No clients found
              </div>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ClientList;