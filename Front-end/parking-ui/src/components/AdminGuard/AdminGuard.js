import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '~/context/AuthContextProvider';
function AdminGuard({ children }) {

    const [{ role }] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (role !== role.ADMIN) { navigate('/'); }
    }, [role])

    if (role !== role.ADMIN) return null;
    return children
}

export default AdminGuard