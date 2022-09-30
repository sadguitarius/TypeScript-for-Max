import gulp from 'gulp';
import ts from 'gulp-typescript';
import {deleteAsync} from 'del';
import replace from "gulp-replace";

const tsProject = ts.createProject("TypeScript/tsconfig.json");

export async function clean() {
	await deleteAsync([
		'JavaScript/**/*.js',
		'!JavaScript/**/*.maxpat',
		'!JavaScript/**/*.svg',
		'!JavaScript/**/*.txt']);
}

export function build() {
	return tsProject.src()
		.pipe(tsProject()).js
		.pipe(replace(
			'Object.defineProperty(exports, "__esModule", { value: true });',
			''
		))
		.pipe(gulp.dest("JavaScript"));
}

const defaultTask = gulp.series(clean, build)

export default defaultTask;



// const baseDir = 'MGraphics JSUI patch-a-day/';
// const mgraphicsTSPath = './TypeScript/' + baseDir;
// const mgraphicsJSPath = './JavaScript/' + baseDir;

// function getFolders(dir) {
// 	return fs.readdirSync(dir)
// 		.filter(function (file) {
// 			return fs.statSync(path.join(dir, file)).isDirectory();
// 		});
// }
//
// function getTSFiles(dir) {
// 	return fs.readdirSync(dir).filter(file => {
// 		return path.extname(file).toLowerCase() === '.ts'
// 	});
// }

// gulp.task('jspainter', function (done) {
// 	const tsFiles = getTSFiles('TypeScript/JSPainter Examples')
// 	const tasks = tsFiles.map(function (tsFile) {
// 		return gulp.src(['TypeScript/JSPainter Examples/' + tsFile, 'TypeScript/types/*.d.ts'])
// 			.pipe(ts({
// 				"target": "ES5",
// 				"types": [],
// 				"lib": ["ES6"],
// 			}))
// 			.js
// 			.pipe(replace(
// 				'Object.defineProperty(exports, "__esModule", { value: true });',
// 				''
// 			))
// 			.pipe(gulp.dest('JavaScript/JSPainter Examples'))
// 	});
//
// 	return merge(tasks);
// })

// gulp.task('mgraphics', function (done) {
// 	const folders = getFolders(mgraphicsTSPath);
// 	if (folders.length === 0) return done(); // nothing to do!
// 	const tasks = folders.map(function (folder) {
// 		const tsp = ts.createProject(mgraphicsTSPath + folder + "/tsconfig.json");
// 		const outdir = tsp.config.compilerOptions.outDir;
// 		console.log(mgraphicsTSPath + folder);
// 		console.log(outdir ? outdir : mgraphicsJSPath + folder);
// 		return tsp.src()
// 			.pipe(tsp()).js
// 			.pipe(replace(
// 				'Object.defineProperty(exports, "__esModule", { value: true });',
// 				''
// 			))
// 			.pipe(gulp.dest(outdir ? outdir : mgraphicsJSPath + folder));
// 	});
// 	return merge(tasks);
// });
