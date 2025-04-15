import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import daftarSemuaAlumniRoutes from "@/daftarSemuaAlumni/routes";
import daftarSemuaMahasiswaRoutes from "@/daftarSemuaMahasiswa/routes";
import daftarAlumniRoutes from "@/daftarAlumni/routes";
import daftarMahasiswaRoutes from "@/daftarMahasiswa/routes";
import daftarIndustriRoutes from "@/daftarIndustri/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import kelasRoutes from "@/kelas/routes";
import semesterRoutes from "@/semester/routes";
import profileIndustriRoutes from "@/profileIndustri/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import pengajuanSubscriptionRoutes from "@/pengajuanSubscription/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import updateLulusanRoutes from "@/updateLulusan/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import approvalSubscriptionRoutes from "@/approvalSubscription/routes";
import programStudiRoutes from "@/programStudi/routes";
import pengumumanAlumniRoutes from "@/pengumumanAlumni/routes";
import pengumumanIndustriRoutes from "@/pengumumanIndustri/routes";
import pengumumanAdminAkademikRoutes from "@/pengumumanAdminAkademik/routes";
import pilihProdiRoutes from "@/pilihProdi/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...daftarSemuaAlumniRoutes, 
	...daftarSemuaMahasiswaRoutes, 
	...daftarAlumniRoutes, 
	...daftarMahasiswaRoutes, 
	...daftarIndustriRoutes, 
	...buatAkunAlumniRoutes, 
	...profileMahasiswaRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...penilaianKelasRoutes, 
	...kelasRoutes, 
	...semesterRoutes, 
	...profileIndustriRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...pengajuanSubscriptionRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...profileAlumniRoutes, 
	...kurikulumRoutes, 
	...pembayaranRoutes, 
	...updateLulusanRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...mataKuliahRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...approvalSubscriptionRoutes, 
	...programStudiRoutes, 
	...pengumumanAlumniRoutes, 
	...pengumumanIndustriRoutes, 
	...pengumumanAdminAkademikRoutes,
	...pilihProdiRoutes,  
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
