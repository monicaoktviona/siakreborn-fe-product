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
		  permission: "administrator",
		},
		{
		  route: '/settings/role',
		  label: 'Pengaturan Role',
		  permission: "administrator",
		},
		{
		  route: '/settings/user',
		  label: 'Pengaturan User',
		  permission: "administrator",
		},
	  ]
	},
]
  
export default menus
addMenu({
	route: '#',
    label: 'Daftar Pengguna',
	permission: ["ReadIndustri","ReadMahasiswa","ReadAlumni","ReadAlumniPublic","ReadMahasiswaPublic","administrator"],
	subMenus: []
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarsemuaalumni',
	label: 'Daftar Semua Alumni',
	permission: "ReadAlumni",
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarsemuamahasiswa',
	label: 'Daftar Semua Mahasiswa',
	permission: "ReadMahasiswa",
})

addSubMenu('Daftar Pengguna', {
	route: '/daftaralumni',
	label: 'Daftar Alumni',
	permission: "ReadAlumniPublic",
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarmahasiswa',
	label: 'Daftar Mahasiswa',
	permission: "ReadMahasiswaPublic",
})

addSubMenu('Daftar Pengguna', {
	route: '/daftarindustri',
	label: 'Daftar Industri',
	permission: "ReadIndustri",
})

addMenu({
	route: '/buatakunalumni',
    label: 'Buat Akun Alumni',
	permission: "CreateAkunAlumni",
	subMenus: []
})

addMenu({
	route: '/profilemahasiswa',
    label: 'Profile Mahasiswa',
	permission: "UpdateMahasiswa",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'CPL',
	permission: "ReadCPL",
	subMenus: []
})

addSubMenu('CPL', {
	route: '/cpl',
	label: 'CPL',
	permission: "ReadCPL",
	
})

addSubMenu('CPL', {
	route: '/cpl/laporan',
	label: 'Laporan CPL',
	permission: "ReadLaporanCPL",
	
})

addMenu({
	route: '/penilaian-kelas',
    label: 'Penilaian Kelas',
	permission: "ReadKelasDosenMe",
	subMenus: []
})

addMenu({
	route: '/kelas',
    label: 'Kelas',
	permission: "ReadKelas",
	subMenus: []
})

addMenu({
	route: '/semester',
    label: 'Semester',
	permission: "ReadSemester",
	subMenus: []
})

addMenu({
	route: '/profileindustri',
    label: 'Profile Industri',
	permission: "UpdateIndustri",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Akademis',
	permission: "ReadKelasMahasiswaMe",
	subMenus: []
})

addSubMenu('Akademis', {
	route: '/akademis/ringkasan',
	label: 'Ringkasan',
	permission: "ReadRencanaStudiMe"
	
})

addSubMenu('Akademis', {
	route: '/akademis/riwayat',
	label: 'Riwayat',
	permission: "ReadKelasMahasiswaMe",
	
})

addMenu({
	route: '/pengajuansubscription',
    label: 'Pengajuan Subscription',
	permission: "ReadSubscriptionPlan",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'IRS',
	permission: "ReadRencanaStudiMe",
	subMenus: []
})

addSubMenu('IRS', {
	route: '/irs/ringkasan',
	label: 'Lihat IRS',
	permission: "ReadRencanaStudiMe",
	
})

addSubMenu('IRS', {
	route: '/irs/isi',
	label: 'Isi/Ubah IRS',
	permission: "CreateRencanaStudiMe",
	
})

addSubMenu('IRS', {
	route: '/irs/pengaturan',
	label: 'Pengaturan Pengisian IRS',
	permission: "UpdatePengisianRencanaStudi",
	
})

addMenu({
	route: '/profilealumni',
    label: 'Profile Alumni',
	permission: "UpdateAlumni",
	subMenus: []
})

addMenu({
	route: '/kurikulum',
    label: 'Kurikulum',
	permission: "ReadKurikulum",
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
	permission: "GraduateMahasiswa",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'CPMK',
	permission: "ReadCPMK",
	subMenus: []
})

addSubMenu('CPMK', {
	route: '/cpmk',
	label: 'CPMK',
	permission: "ReadCPMK",
	
})

addSubMenu('CPMK', {
	route: '/subcpmk',
	label: 'Sub-CPMK',
	permission: "ReadSubCPMK",
	
})

addSubMenu('CPMK', {
	route: '/cpmk/laporan',
	label: 'Laporan CPMK',
	permission: "ReadLaporanCPMK",
	
})

addMenu({
	route: '/matakuliah',
    label: 'Mata Kuliah',
	permission: "ReadMataKuliah",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Verifikasi Identitas',
	permission: ["VerifyAlumni","VerifyMahasiswa"],
	subMenus: []
})

addSubMenu('Verifikasi Identitas', {
	route: '/verifikasialumni',
	label: 'Verifikasi Alumni',
	permission: ["VerifyAlumni","VerifyMahasiswa"],
	
})

addSubMenu('Verifikasi Identitas', {
	route: '/verifikasimahasiswa',
	label: 'Verifikasi Mahasiswa',
	permission: ["VerifyAlumni","VerifyMahasiswa"],
})

addMenu({
	route: '/approvalsubscription',
    label: 'Approval Subscription',
	permission: "SubscriptionApproveIndustri",
	subMenus: []
})

addMenu({
	route: '/programstudi',
    label: 'Program Studi',
	permission: "ReadProgramStudi",
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Pengumuman',
	permission: ["ReadInformasiAkademik","ReadInformasiIndustri","ReadInformasiAlumni","administrator"],
	subMenus: []
})

addSubMenu('Pengumuman', {
	route: '/pengumumanalumni',
	label: 'Pengumuman Alumni',
	permission: "ReadInformasiAlumni",
	
})

addSubMenu('Pengumuman', {
	route: '/pengumumanindustri',
	label: 'Pengumuman Industri',
	permission: "ReadInformasiIndustri",
})

addSubMenu('Pengumuman', {
	route: '/pengumumanakademik',
	label: 'Pengumuman Admin Akademik',
	permission: "ReadInformasiAkademik",
	
})

addMenu({
	route: '/pilihprodi',
	label: 'Pilih Prodi',
	permission: "SavePilihProdi",
	})
