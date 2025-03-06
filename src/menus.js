const menus = []
const addMenu = (menu) => {
	menus.push(menu)
}

const addSubMenu = (label, subMenu, menu = menus) => {
	for (const item of menu) {
		if (item.label === label) {
			item.subMenus.push(subMenu);
			return;
		}
		if (item.subMenus) {
			addSubMenu(label, subMenu, item.subMenus);
		}
	}
}

export const settingsMenu = [
	{
	  route: '#',
	  label: 'Pengaturan',
	  subMenus: [
		{
		  route: '/settings/appearance',
		  label: 'Pengaturan Tampilan',
		},
		{
		  route: '/settings/role',
		  label: 'Pengaturan Role',
		},
		{
		  route: '/settings/user',
		  label: 'Pengaturan User',
		},
	  ]
	},
]
  
export default menus
addMenu({
	route: '#',
    label: 'Daftar Pengguna',
	subMenus: []
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarsemuaalumni',
	label: 'Daftar Semua Alumni',
	
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarsemuamahasiswa',
	label: 'Daftar Semua Mahasiswa',
	
})

addSubMenu('Daftar Pengguna', {
	route: '/daftaralumni',
	label: 'Daftar Alumni',
	
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarmahasiswa',
	label: 'Daftar Mahasiswa',
	
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarindustri',
	label: 'Daftar Industri',
	
})

addMenu({
	route: '/buatakunalumni',
    label: 'Buat Akun Alumni',
	subMenus: []
})

addMenu({
	route: '/profilemahasiswa',
    label: 'Profile Mahasiswa',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'CPL',
	subMenus: []
})

addSubMenu('CPL', {
	route: '/cpl',
	label: 'CPL',
	
})

addSubMenu('CPL', {
	route: '/cpl/laporan',
	label: 'Laporan CPL',
	
})

addMenu({
	route: '/penilaian-kelas',
    label: 'Penilaian Kelas',
	subMenus: []
})

addMenu({
	route: '/kelas',
    label: 'Kelas',
	subMenus: []
})

addMenu({
	route: '/semester',
    label: 'Semester',
	subMenus: []
})

addMenu({
	route: '/profileindustri',
    label: 'Profile Industri',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Akademis',
	subMenus: []
})

addSubMenu('Akademis', {
	route: '/akademis/ringkasan',
	label: 'Ringkasan',
	
})

addSubMenu('Akademis', {
	route: '/akademis/riwayat',
	label: 'Riwayat',
	
})

addMenu({
	route: '/pengajuansubscription',
    label: 'Pengajuan Subscription',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'IRS',
	subMenus: []
})

addSubMenu('IRS', {
	route: '/irs/ringkasan',
	label: 'Lihat IRS',
	
})

addSubMenu('IRS', {
	route: '/irs/isi',
	label: 'Isi/Ubah IRS',
	
})

addSubMenu('IRS', {
	route: '/irs/pengaturan',
	label: 'Pengaturan Pengisian IRS',
	
})

addMenu({
	route: '/profilealumni',
    label: 'Profile Alumni',
	subMenus: []
})

addMenu({
	route: '/kurikulum',
    label: 'Kurikulum',
	subMenus: []
})

addMenu({
	route: '/pembayaran',
    label: 'Pembayaran',
	subMenus: []
})

addMenu({
	route: '/updatelulusan',
    label: 'Update Lulusan',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'CPMK',
	subMenus: []
})

addSubMenu('CPMK', {
	route: '/cpmk',
	label: 'CPMK',
	
})

addSubMenu('CPMK', {
	route: '/subcpmk',
	label: 'Sub-CPMK',
	
})

addSubMenu('CPMK', {
	route: '/cpmk/laporan',
	label: 'Laporan CPMK',
	
})

addMenu({
	route: '/matakuliah',
    label: 'Mata Kuliah',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Verifikasi Identitas',
	subMenus: []
})

addSubMenu('Verifikasi Identitas', {
	route: '/verifikasialumni',
	label: 'Verifikasi Alumni',
	
})

addSubMenu('Verifikasi Identitas', {
	route: '/verifikasimahasiswa',
	label: 'Verifikasi Mahasiswa',
	
})

addMenu({
	route: '/approvalsubscription',
    label: 'Approval Subscription',
	subMenus: []
})

addMenu({
	route: '/programstudi',
    label: 'Program Studi',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Pengumuman',
	subMenus: []
})

addSubMenu('Pengumuman', {
	route: '/pengumumanalumni',
	label: 'Pengumuman Alumni',
	
})

addSubMenu('Pengumuman', {
	route: '/pengumumanindustri',
	label: 'Pengumuman Industri',
	
})

addSubMenu('Pengumuman', {
	route: '/pengumumanakademik',
	label: 'Pengumuman Admin Akademik',
	
})
