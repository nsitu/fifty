(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r); new MutationObserver(r => { for (const s of r) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o) }).observe(document, { childList: !0, subtree: !0 }); function e(r) { const s = {}; return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function n(r) { if (r.ep) return; r.ep = !0; const s = e(r); fetch(r.href, s) } })();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ss = "160", In = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Nn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, vc = 0, zs = 1, Mc = 2, xo = 1, vo = 2, Je = 3, fn = 0, Ee = 1, Ne = 2, ln = 0, ii = 1, Hs = 2, Gs = 3, Vs = 4, Sc = 5, En = 100, yc = 101, Ec = 102, ks = 103, Ws = 104, Tc = 200, bc = 201, Ac = 202, wc = 203, us = 204, hs = 205, Rc = 206, Cc = 207, Pc = 208, Lc = 209, Dc = 210, Uc = 211, Ic = 212, Nc = 213, Oc = 214, Fc = 0, Bc = 1, zc = 2, fr = 3, Hc = 4, Gc = 5, Vc = 6, kc = 7, Mo = 0, Wc = 1, Xc = 2, un = 0, qc = 1, Yc = 2, jc = 3, Zc = 4, Kc = 5, Jc = 6, So = 300, oi = 301, ci = 302, fs = 303, ds = 304, vr = 306, li = 1e3, Oe = 1001, ps = 1002, Me = 1003, Xs = 1004, Cr = 1005, ye = 1006, $c = 1007, Ti = 1008, hn = 1009, Qc = 1010, tl = 1011, ys = 1012, yo = 1013, on = 1014, cn = 1015, bi = 1016, Eo = 1017, To = 1018, bn = 1020, el = 1021, Fe = 1023, nl = 1024, il = 1025, An = 1026, ui = 1027, rl = 1028, bo = 1029, sl = 1030, Ao = 1031, wo = 1033, Pr = 33776, Lr = 33777, Dr = 33778, Ur = 33779, qs = 35840, Ys = 35841, js = 35842, Zs = 35843, Ro = 36196, Ks = 37492, Js = 37496, $s = 37808, Qs = 37809, ta = 37810, ea = 37811, na = 37812, ia = 37813, ra = 37814, sa = 37815, aa = 37816, oa = 37817, ca = 37818, la = 37819, ua = 37820, ha = 37821, Ir = 36492, fa = 36494, da = 36495, al = 36283, pa = 36284, ma = 36285, ga = 36286, Co = 3e3, wn = 3001, ol = 3200, cl = 3201, Po = 0, ll = 1, Pe = "", re = "srgb", Qe = "srgb-linear", Es = "display-p3", Mr = "display-p3-linear", dr = "linear", Jt = "srgb", pr = "rec709", mr = "p3", On = 7680, _a = 519, ul = 512, hl = 513, fl = 514, Lo = 515, dl = 516, pl = 517, ml = 518, gl = 519, xa = 35044, va = "300 es", ms = 1035, $e = 2e3, gr = 2001; class Dn { addEventListener(t, e) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e) } hasEventListener(t, e) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[t] !== void 0 && n[t].indexOf(e) !== -1 } removeEventListener(t, e) { if (this._listeners === void 0) return; const r = this._listeners[t]; if (r !== void 0) { const s = r.indexOf(e); s !== -1 && r.splice(s, 1) } } dispatchEvent(t) { if (this._listeners === void 0) return; const n = this._listeners[t.type]; if (n !== void 0) { t.target = this; const r = n.slice(0); for (let s = 0, o = r.length; s < o; s++)r[s].call(this, t); t.target = null } } } const pe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let Ma = 1234567; const vi = Math.PI / 180, hi = 180 / Math.PI; function Un() { const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (pe[i & 255] + pe[i >> 8 & 255] + pe[i >> 16 & 255] + pe[i >> 24 & 255] + "-" + pe[t & 255] + pe[t >> 8 & 255] + "-" + pe[t >> 16 & 15 | 64] + pe[t >> 24 & 255] + "-" + pe[e & 63 | 128] + pe[e >> 8 & 255] + "-" + pe[e >> 16 & 255] + pe[e >> 24 & 255] + pe[n & 255] + pe[n >> 8 & 255] + pe[n >> 16 & 255] + pe[n >> 24 & 255]).toLowerCase() } function ue(i, t, e) { return Math.max(t, Math.min(e, i)) } function Ts(i, t) { return (i % t + t) % t } function _l(i, t, e, n, r) { return n + (i - t) * (r - n) / (e - t) } function xl(i, t, e) { return i !== t ? (e - i) / (t - i) : 0 } function Mi(i, t, e) { return (1 - e) * i + e * t } function vl(i, t, e, n) { return Mi(i, t, 1 - Math.exp(-e * n)) } function Ml(i, t = 1) { return t - Math.abs(Ts(i, t * 2) - t) } function Sl(i, t, e) { return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i)) } function yl(i, t, e) { return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10)) } function El(i, t) { return i + Math.floor(Math.random() * (t - i + 1)) } function Tl(i, t) { return i + Math.random() * (t - i) } function bl(i) { return i * (.5 - Math.random()) } function Al(i) { i !== void 0 && (Ma = i); let t = Ma += 1831565813; return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296 } function wl(i) { return i * vi } function Rl(i) { return i * hi } function gs(i) { return (i & i - 1) === 0 && i !== 0 } function Cl(i) { return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2)) } function _r(i) { return Math.pow(2, Math.floor(Math.log(i) / Math.LN2)) } function Pl(i, t, e, n, r) { const s = Math.cos, o = Math.sin, a = s(e / 2), c = o(e / 2), l = s((t + n) / 2), u = o((t + n) / 2), f = s((t - n) / 2), d = o((t - n) / 2), g = s((n - t) / 2), _ = o((n - t) / 2); switch (r) { case "XYX": i.set(a * u, c * f, c * d, a * l); break; case "YZY": i.set(c * d, a * u, c * f, a * l); break; case "ZXZ": i.set(c * f, c * d, a * u, a * l); break; case "XZX": i.set(a * u, c * _, c * g, a * l); break; case "YXY": i.set(c * g, a * u, c * _, a * l); break; case "ZYZ": i.set(c * _, c * g, a * u, a * l); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r) } } function Qn(i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return i / 4294967295; case Uint16Array: return i / 65535; case Uint8Array: return i / 255; case Int32Array: return Math.max(i / 2147483647, -1); case Int16Array: return Math.max(i / 32767, -1); case Int8Array: return Math.max(i / 127, -1); default: throw new Error("Invalid component type.") } } function xe(i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return Math.round(i * 4294967295); case Uint16Array: return Math.round(i * 65535); case Uint8Array: return Math.round(i * 255); case Int32Array: return Math.round(i * 2147483647); case Int16Array: return Math.round(i * 32767); case Int8Array: return Math.round(i * 127); default: throw new Error("Invalid component type.") } } const Ll = { DEG2RAD: vi, RAD2DEG: hi, generateUUID: Un, clamp: ue, euclideanModulo: Ts, mapLinear: _l, inverseLerp: xl, lerp: Mi, damp: vl, pingpong: Ml, smoothstep: Sl, smootherstep: yl, randInt: El, randFloat: Tl, randFloatSpread: bl, seededRandom: Al, degToRad: wl, radToDeg: Rl, isPowerOfTwo: gs, ceilPowerOfTwo: Cl, floorPowerOfTwo: _r, setQuaternionFromProperEuler: Pl, normalize: xe, denormalize: Qn }; class dt { constructor(t = 0, e = 0) { dt.prototype.isVector2 = !0, this.x = t, this.y = e } get width() { return this.x } set width(t) { this.x = t } get height() { return this.y } set height(t) { this.y = t } set(t, e) { return this.x = t, this.y = e, this } setScalar(t) { return this.x = t, this.y = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y) } copy(t) { return this.x = t.x, this.y = t.y, this } add(t) { return this.x += t.x, this.y += t.y, this } addScalar(t) { return this.x += t, this.y += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this } subScalar(t) { return this.x -= t, this.y -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this } divide(t) { return this.x /= t.x, this.y /= t.y, this } divideScalar(t) { return this.multiplyScalar(1 / t) } applyMatrix3(t) { const e = this.x, n = this.y, r = t.elements; return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this } clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(t) { return this.x * t.x + this.y * t.y } cross(t) { return this.x * t.y - this.y * t.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(ue(n, -1, 1)) } distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared(t) { const e = this.x - t.x, n = this.y - t.y; return e * e + n * n } manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this } equals(t) { return t.x === this.x && t.y === this.y } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this } rotateAround(t, e) { const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, o = this.y - t.y; return this.x = s * n - o * r + t.x, this.y = s * r + o * n + t.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class Ot { constructor(t, e, n, r, s, o, a, c, l) { Ot.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, o, a, c, l) } set(t, e, n, r, s, o, a, c, l) { const u = this.elements; return u[0] = t, u[1] = r, u[2] = a, u[3] = e, u[4] = s, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this } extractBasis(t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(t) { const e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this } multiply(t) { return this.multiplyMatrices(this, t) } premultiply(t) { return this.multiplyMatrices(t, this) } multiplyMatrices(t, e) { const n = t.elements, r = e.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], f = n[7], d = n[2], g = n[5], _ = n[8], x = r[0], p = r[3], h = r[6], A = r[1], v = r[4], y = r[7], U = r[2], P = r[5], R = r[8]; return s[0] = o * x + a * A + c * U, s[3] = o * p + a * v + c * P, s[6] = o * h + a * y + c * R, s[1] = l * x + u * A + f * U, s[4] = l * p + u * v + f * P, s[7] = l * h + u * y + f * R, s[2] = d * x + g * A + _ * U, s[5] = d * p + g * v + _ * P, s[8] = d * h + g * y + _ * R, this } multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this } determinant() { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], u = t[8]; return e * o * u - e * a * l - n * s * u + n * a * c + r * s * l - r * o * c } invert() { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], u = t[8], f = u * o - a * l, d = a * c - u * s, g = l * s - o * c, _ = e * f + n * d + r * g; if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const x = 1 / _; return t[0] = f * x, t[1] = (r * l - u * n) * x, t[2] = (a * n - r * o) * x, t[3] = d * x, t[4] = (u * e - r * c) * x, t[5] = (r * s - a * e) * x, t[6] = g * x, t[7] = (n * c - l * e) * x, t[8] = (o * e - n * s) * x, this } transpose() { let t; const e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this } getNormalMatrix(t) { return this.setFromMatrix4(t).invert().transpose() } transposeIntoArray(t) { const e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this } setUvTransform(t, e, n, r, s, o, a) { const c = Math.cos(s), l = Math.sin(s); return this.set(n * c, n * l, -n * (c * o + l * a) + o + t, -r * l, r * c, -r * (-l * o + c * a) + a + e, 0, 0, 1), this } scale(t, e) { return this.premultiply(Nr.makeScale(t, e)), this } rotate(t) { return this.premultiply(Nr.makeRotation(-t)), this } translate(t, e) { return this.premultiply(Nr.makeTranslation(t, e)), this } makeTranslation(t, e) { return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this } makeRotation(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this } makeScale(t, e) { return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this } equals(t) { const e = this.elements, n = t.elements; for (let r = 0; r < 9; r++)if (e[r] !== n[r]) return !1; return !0 } fromArray(t, e = 0) { for (let n = 0; n < 9; n++)this.elements[n] = t[n + e]; return this } toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t } clone() { return new this.constructor().fromArray(this.elements) } } const Nr = new Ot; function Do(i) { for (let t = i.length - 1; t >= 0; --t)if (i[t] >= 65535) return !0; return !1 } function Ai(i) { return document.createElementNS("http://www.w3.org/1999/xhtml", i) } function Dl() { const i = Ai("canvas"); return i.style.display = "block", i } const Sa = {}; function Si(i) { i in Sa || (Sa[i] = !0, console.warn(i)) } const ya = new Ot().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), Ea = new Ot().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), Fi = { [Qe]: { transfer: dr, primaries: pr, toReference: i => i, fromReference: i => i }, [re]: { transfer: Jt, primaries: pr, toReference: i => i.convertSRGBToLinear(), fromReference: i => i.convertLinearToSRGB() }, [Mr]: { transfer: dr, primaries: mr, toReference: i => i.applyMatrix3(Ea), fromReference: i => i.applyMatrix3(ya) }, [Es]: { transfer: Jt, primaries: mr, toReference: i => i.convertSRGBToLinear().applyMatrix3(Ea), fromReference: i => i.applyMatrix3(ya).convertLinearToSRGB() } }, Ul = new Set([Qe, Mr]), Zt = { enabled: !0, _workingColorSpace: Qe, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(i) { if (!Ul.has(i)) throw new Error(`Unsupported working color space, "${i}".`); this._workingColorSpace = i }, convert: function (i, t, e) { if (this.enabled === !1 || t === e || !t || !e) return i; const n = Fi[t].toReference, r = Fi[e].fromReference; return r(n(i)) }, fromWorkingColorSpace: function (i, t) { return this.convert(i, this._workingColorSpace, t) }, toWorkingColorSpace: function (i, t) { return this.convert(i, t, this._workingColorSpace) }, getPrimaries: function (i) { return Fi[i].primaries }, getTransfer: function (i) { return i === Pe ? dr : Fi[i].transfer } }; function ri(i) { return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4) } function Or(i) { return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055 } let Fn; class Uo { static getDataURL(t) { if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src; let e; if (t instanceof HTMLCanvasElement) e = t; else { Fn === void 0 && (Fn = Ai("canvas")), Fn.width = t.width, Fn.height = t.height; const n = Fn.getContext("2d"); t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Fn } return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png") } static sRGBToLinear(t) { if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) { const e = Ai("canvas"); e.width = t.width, e.height = t.height; const n = e.getContext("2d"); n.drawImage(t, 0, 0, t.width, t.height); const r = n.getImageData(0, 0, t.width, t.height), s = r.data; for (let o = 0; o < s.length; o++)s[o] = ri(s[o] / 255) * 255; return n.putImageData(r, 0, 0), e } else if (t.data) { const e = t.data.slice(0); for (let n = 0; n < e.length; n++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(ri(e[n] / 255) * 255) : e[n] = ri(e[n]); return { data: e, width: t.width, height: t.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t } } let Il = 0; class Io { constructor(t = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: Il++ }), this.uuid = Un(), this.data = t, this.version = 0 } set needsUpdate(t) { t === !0 && this.version++ } toJSON(t) { const e = t === void 0 || typeof t == "string"; if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, r = this.data; if (r !== null) { let s; if (Array.isArray(r)) { s = []; for (let o = 0, a = r.length; o < a; o++)r[o].isDataTexture ? s.push(Fr(r[o].image)) : s.push(Fr(r[o])) } else s = Fr(r); n.url = s } return e || (t.images[this.uuid] = n), n } } function Fr(i) { return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Uo.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let Nl = 0; class Se extends Dn { constructor(t = Se.DEFAULT_IMAGE, e = Se.DEFAULT_MAPPING, n = Oe, r = Oe, s = ye, o = Ti, a = Fe, c = hn, l = Se.DEFAULT_ANISOTROPY, u = Pe) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Nl++ }), this.uuid = Un(), this.name = "", this.source = new Io(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new dt(0, 0), this.repeat = new dt(1, 1), this.center = new dt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ot, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === wn ? re : Pe), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 } get image() { return this.source.data } set image(t = null) { this.source.data = t } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this } toJSON(t) { const e = t === void 0 || typeof t == "string"; if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid]; const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(t) { if (this.mapping !== So) return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) { case li: t.x = t.x - Math.floor(t.x); break; case Oe: t.x = t.x < 0 ? 0 : 1; break; case ps: Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x); break }if (t.y < 0 || t.y > 1) switch (this.wrapT) { case li: t.y = t.y - Math.floor(t.y); break; case Oe: t.y = t.y < 0 ? 0 : 1; break; case ps: Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y); break }return this.flipY && (t.y = 1 - t.y), t } set needsUpdate(t) { t === !0 && (this.version++, this.source.needsUpdate = !0) } get encoding() { return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === re ? wn : Co } set encoding(t) { Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t === wn ? re : Pe } } Se.DEFAULT_IMAGE = null; Se.DEFAULT_MAPPING = So; Se.DEFAULT_ANISOTROPY = 1; class he { constructor(t = 0, e = 0, n = 0, r = 1) { he.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r } get width() { return this.z } set width(t) { this.z = t } get height() { return this.w } set height(t) { this.w = t } set(t, e, n, r) { return this.x = t, this.y = e, this.z = n, this.w = r, this } setScalar(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setZ(t) { return this.z = t, this } setW(t) { return this.w = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; case 3: this.w = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this } add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this } addScalar(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this } subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this } applyMatrix4(t) { const e = this.x, n = this.y, r = this.z, s = this.w, o = t.elements; return this.x = o[0] * e + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * e + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * e + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * e + o[7] * n + o[11] * r + o[15] * s, this } divideScalar(t) { return this.multiplyScalar(1 / t) } setAxisAngleFromQuaternion(t) { this.w = 2 * Math.acos(t.w); const e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this } setAxisAngleFromRotationMatrix(t) { let e, n, r, s; const c = t.elements, l = c[0], u = c[4], f = c[8], d = c[1], g = c[5], _ = c[9], x = c[2], p = c[6], h = c[10]; if (Math.abs(u - d) < .01 && Math.abs(f - x) < .01 && Math.abs(_ - p) < .01) { if (Math.abs(u + d) < .1 && Math.abs(f + x) < .1 && Math.abs(_ + p) < .1 && Math.abs(l + g + h - 3) < .1) return this.set(1, 0, 0, 0), this; e = Math.PI; const v = (l + 1) / 2, y = (g + 1) / 2, U = (h + 1) / 2, P = (u + d) / 4, R = (f + x) / 4, q = (_ + p) / 4; return v > y && v > U ? v < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(v), r = P / n, s = R / n) : y > U ? y < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(y), n = P / r, s = q / r) : U < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(U), n = R / s, r = q / s), this.set(n, r, s, e), this } let A = Math.sqrt((p - _) * (p - _) + (f - x) * (f - x) + (d - u) * (d - u)); return Math.abs(A) < .001 && (A = 1), this.x = (p - _) / A, this.y = (f - x) / A, this.z = (d - u) / A, this.w = Math.acos((l + g + h - 1) / 2), this } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this } clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this } equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Ol extends Dn { constructor(t = 1, e = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new he(0, 0, t, e), this.scissorTest = !1, this.viewport = new he(0, 0, t, e); const r = { width: t, height: e, depth: 1 }; n.encoding !== void 0 && (Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === wn ? re : Pe), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: ye, depthBuffer: !0, stencilBuffer: !1, depthTexture: null, samples: 0 }, n), this.texture = new Se(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } setSize(t, e, n = 1) { (this.width !== t || this.height !== e || this.depth !== n) && (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) } clone() { return new this.constructor().copy(this) } copy(t) { this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0; const e = Object.assign({}, t.texture.image); return this.texture.source = new Io(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class Rn extends Ol { constructor(t = 1, e = 1, n = {}) { super(t, e, n), this.isWebGLRenderTarget = !0 } } class No extends Se { constructor(t = null, e = 1, n = 1, r = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Me, this.minFilter = Me, this.wrapR = Oe, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Fl extends Se { constructor(t = null, e = 1, n = 1, r = 1) { super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Me, this.minFilter = Me, this.wrapR = Oe, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Cn { constructor(t = 0, e = 0, n = 0, r = 1) { this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r } static slerpFlat(t, e, n, r, s, o, a) { let c = n[r + 0], l = n[r + 1], u = n[r + 2], f = n[r + 3]; const d = s[o + 0], g = s[o + 1], _ = s[o + 2], x = s[o + 3]; if (a === 0) { t[e + 0] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = f; return } if (a === 1) { t[e + 0] = d, t[e + 1] = g, t[e + 2] = _, t[e + 3] = x; return } if (f !== x || c !== d || l !== g || u !== _) { let p = 1 - a; const h = c * d + l * g + u * _ + f * x, A = h >= 0 ? 1 : -1, v = 1 - h * h; if (v > Number.EPSILON) { const U = Math.sqrt(v), P = Math.atan2(U, h * A); p = Math.sin(p * P) / U, a = Math.sin(a * P) / U } const y = a * A; if (c = c * p + d * y, l = l * p + g * y, u = u * p + _ * y, f = f * p + x * y, p === 1 - a) { const U = 1 / Math.sqrt(c * c + l * l + u * u + f * f); c *= U, l *= U, u *= U, f *= U } } t[e] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = f } static multiplyQuaternionsFlat(t, e, n, r, s, o) { const a = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], f = s[o], d = s[o + 1], g = s[o + 2], _ = s[o + 3]; return t[e] = a * _ + u * f + c * g - l * d, t[e + 1] = c * _ + u * d + l * f - a * g, t[e + 2] = l * _ + u * g + a * d - c * f, t[e + 3] = u * _ - a * f - c * d - l * g, t } get x() { return this._x } set x(t) { this._x = t, this._onChangeCallback() } get y() { return this._y } set y(t) { this._y = t, this._onChangeCallback() } get z() { return this._z } set z(t) { this._z = t, this._onChangeCallback() } get w() { return this._w } set w(t) { this._w = t, this._onChangeCallback() } set(t, e, n, r) { return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this } setFromEuler(t, e = !0) { const n = t._x, r = t._y, s = t._z, o = t._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(r / 2), f = a(s / 2), d = c(n / 2), g = c(r / 2), _ = c(s / 2); switch (o) { case "XYZ": this._x = d * u * f + l * g * _, this._y = l * g * f - d * u * _, this._z = l * u * _ + d * g * f, this._w = l * u * f - d * g * _; break; case "YXZ": this._x = d * u * f + l * g * _, this._y = l * g * f - d * u * _, this._z = l * u * _ - d * g * f, this._w = l * u * f + d * g * _; break; case "ZXY": this._x = d * u * f - l * g * _, this._y = l * g * f + d * u * _, this._z = l * u * _ + d * g * f, this._w = l * u * f - d * g * _; break; case "ZYX": this._x = d * u * f - l * g * _, this._y = l * g * f + d * u * _, this._z = l * u * _ - d * g * f, this._w = l * u * f + d * g * _; break; case "YZX": this._x = d * u * f + l * g * _, this._y = l * g * f + d * u * _, this._z = l * u * _ - d * g * f, this._w = l * u * f - d * g * _; break; case "XZY": this._x = d * u * f - l * g * _, this._y = l * g * f - d * u * _, this._z = l * u * _ + d * g * f, this._w = l * u * f + d * g * _; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return e === !0 && this._onChangeCallback(), this } setFromAxisAngle(t, e) { const n = e / 2, r = Math.sin(n); return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(t) { const e = t.elements, n = e[0], r = e[4], s = e[8], o = e[1], a = e[5], c = e[9], l = e[2], u = e[6], f = e[10], d = n + a + f; if (d > 0) { const g = .5 / Math.sqrt(d + 1); this._w = .25 / g, this._x = (u - c) * g, this._y = (s - l) * g, this._z = (o - r) * g } else if (n > a && n > f) { const g = 2 * Math.sqrt(1 + n - a - f); this._w = (u - c) / g, this._x = .25 * g, this._y = (r + o) / g, this._z = (s + l) / g } else if (a > f) { const g = 2 * Math.sqrt(1 + a - n - f); this._w = (s - l) / g, this._x = (r + o) / g, this._y = .25 * g, this._z = (c + u) / g } else { const g = 2 * Math.sqrt(1 + f - n - a); this._w = (o - r) / g, this._x = (s + l) / g, this._y = (c + u) / g, this._z = .25 * g } return this._onChangeCallback(), this } setFromUnitVectors(t, e) { let n = t.dot(e) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize() } angleTo(t) { return 2 * Math.acos(Math.abs(ue(this.dot(t), -1, 1))) } rotateTowards(t, e) { const n = this.angleTo(t); if (n === 0) return this; const r = Math.min(1, e / n); return this.slerp(t, r), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let t = this.length(); return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this } multiply(t) { return this.multiplyQuaternions(this, t) } premultiply(t) { return this.multiplyQuaternions(t, this) } multiplyQuaternions(t, e) { const n = t._x, r = t._y, s = t._z, o = t._w, a = e._x, c = e._y, l = e._z, u = e._w; return this._x = n * u + o * a + r * l - s * c, this._y = r * u + o * c + s * a - n * l, this._z = s * u + o * l + n * c - r * a, this._w = o * u - n * a - r * c - s * l, this._onChangeCallback(), this } slerp(t, e) { if (e === 0) return this; if (e === 1) return this.copy(t); const n = this._x, r = this._y, s = this._z, o = this._w; let a = o * t._w + n * t._x + r * t._y + s * t._z; if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = s, this; const c = 1 - a * a; if (c <= Number.EPSILON) { const g = 1 - e; return this._w = g * o + e * this._w, this._x = g * n + e * this._x, this._y = g * r + e * this._y, this._z = g * s + e * this._z, this.normalize(), this } const l = Math.sqrt(c), u = Math.atan2(l, a), f = Math.sin((1 - e) * u) / l, d = Math.sin(e * u) / l; return this._w = o * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this } slerpQuaternions(t, e, n) { return this.copy(t).slerp(e, n) } random() { const t = Math.random(), e = Math.sqrt(1 - t), n = Math.sqrt(t), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random(); return this.set(e * Math.cos(r), n * Math.sin(s), n * Math.cos(s), e * Math.sin(r)) } equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w } fromArray(t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this } toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t } fromBufferAttribute(t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(t) { return this._onChangeCallback = t, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class z { constructor(t = 0, e = 0, n = 0) { z.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n } set(t, e, n) { return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this } setScalar(t) { return this.x = t, this.y = t, this.z = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setZ(t) { return this.z = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this } add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this } addScalar(t) { return this.x += t, this.y += t, this.z += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this } subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this } multiplyVectors(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this } applyEuler(t) { return this.applyQuaternion(Ta.setFromEuler(t)) } applyAxisAngle(t, e) { return this.applyQuaternion(Ta.setFromAxisAngle(t, e)) } applyMatrix3(t) { const e = this.x, n = this.y, r = this.z, s = t.elements; return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this } applyNormalMatrix(t) { return this.applyMatrix3(t).normalize() } applyMatrix4(t) { const e = this.x, n = this.y, r = this.z, s = t.elements, o = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]); return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * o, this } applyQuaternion(t) { const e = this.x, n = this.y, r = this.z, s = t.x, o = t.y, a = t.z, c = t.w, l = 2 * (o * r - a * n), u = 2 * (a * e - s * r), f = 2 * (s * n - o * e); return this.x = e + c * l + o * f - a * u, this.y = n + c * u + a * l - s * f, this.z = r + c * f + s * u - o * l, this } project(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) } unproject(t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld) } transformDirection(t) { const e = this.x, n = this.y, r = this.z, s = t.elements; return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize() } divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this } divideScalar(t) { return this.multiplyScalar(1 / t) } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this } clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this } cross(t) { return this.crossVectors(this, t) } crossVectors(t, e) { const n = t.x, r = t.y, s = t.z, o = e.x, a = e.y, c = e.z; return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this } projectOnVector(t) { const e = t.lengthSq(); if (e === 0) return this.set(0, 0, 0); const n = t.dot(this) / e; return this.copy(t).multiplyScalar(n) } projectOnPlane(t) { return Br.copy(this).projectOnVector(t), this.sub(Br) } reflect(t) { return this.sub(Br.copy(t).multiplyScalar(2 * this.dot(t))) } angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(ue(n, -1, 1)) } distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared(t) { const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z; return e * e + n * n + r * r } manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) } setFromSpherical(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) } setFromSphericalCoords(t, e, n) { const r = Math.sin(e) * t; return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this } setFromCylindrical(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) } setFromCylindricalCoords(t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this } setFromMatrixPosition(t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this } setFromMatrixScale(t) { const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = r, this } setFromMatrixColumn(t, e) { return this.fromArray(t.elements, e * 4) } setFromMatrix3Column(t, e) { return this.fromArray(t.elements, e * 3) } setFromEuler(t) { return this.x = t._x, this.y = t._y, this.z = t._z, this } setFromColor(t) { return this.x = t.r, this.y = t.g, this.z = t.b, this } equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const t = (Math.random() - .5) * 2, e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t ** 2); return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const Br = new z, Ta = new Cn; class Pi { constructor(t = new z(1 / 0, 1 / 0, 1 / 0), e = new z(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = t, this.max = e } set(t, e) { return this.min.copy(t), this.max.copy(e), this } setFromArray(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e += 3)this.expandByPoint(Le.fromArray(t, e)); return this } setFromBufferAttribute(t) { this.makeEmpty(); for (let e = 0, n = t.count; e < n; e++)this.expandByPoint(Le.fromBufferAttribute(t, e)); return this } setFromPoints(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]); return this } setFromCenterAndSize(t, e) { const n = Le.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this } setFromObject(t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e) } clone() { return new this.constructor().copy(this) } copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) } expandByPoint(t) { return this.min.min(t), this.max.max(t), this } expandByVector(t) { return this.min.sub(t), this.max.add(t), this } expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this } expandByObject(t, e = !1) { t.updateWorldMatrix(!1, !1); const n = t.geometry; if (n !== void 0) { const s = n.getAttribute("position"); if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0) for (let o = 0, a = s.count; o < a; o++)t.isMesh === !0 ? t.getVertexPosition(o, Le) : Le.fromBufferAttribute(s, o), Le.applyMatrix4(t.matrixWorld), this.expandByPoint(Le); else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Bi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(t.matrixWorld), this.union(Bi) } const r = t.children; for (let s = 0, o = r.length; s < o; s++)this.expandByObject(r[s], e); return this } containsPoint(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z) } containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z } getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z) } intersectsSphere(t) { return this.clampPoint(t.center, Le), Le.distanceToSquared(t.center) <= t.radius * t.radius } intersectsPlane(t) { let e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant } intersectsTriangle(t) { if (this.isEmpty()) return !1; this.getCenter(mi), zi.subVectors(this.max, mi), Bn.subVectors(t.a, mi), zn.subVectors(t.b, mi), Hn.subVectors(t.c, mi), tn.subVectors(zn, Bn), en.subVectors(Hn, zn), _n.subVectors(Bn, Hn); let e = [0, -tn.z, tn.y, 0, -en.z, en.y, 0, -_n.z, _n.y, tn.z, 0, -tn.x, en.z, 0, -en.x, _n.z, 0, -_n.x, -tn.y, tn.x, 0, -en.y, en.x, 0, -_n.y, _n.x, 0]; return !zr(e, Bn, zn, Hn, zi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !zr(e, Bn, zn, Hn, zi)) ? !1 : (Hi.crossVectors(tn, en), e = [Hi.x, Hi.y, Hi.z], zr(e, Bn, zn, Hn, zi)) } clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max) } distanceToPoint(t) { return this.clampPoint(t, Le).distanceTo(t) } getBoundingSphere(t) { return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Le).length() * .5), t } intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this } union(t) { return this.min.min(t.min), this.max.max(t.max), this } applyMatrix4(t) { return this.isEmpty() ? this : (Xe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Xe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Xe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Xe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Xe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Xe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Xe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Xe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Xe), this) } translate(t) { return this.min.add(t), this.max.add(t), this } equals(t) { return t.min.equals(this.min) && t.max.equals(this.max) } } const Xe = [new z, new z, new z, new z, new z, new z, new z, new z], Le = new z, Bi = new Pi, Bn = new z, zn = new z, Hn = new z, tn = new z, en = new z, _n = new z, mi = new z, zi = new z, Hi = new z, xn = new z; function zr(i, t, e, n, r) { for (let s = 0, o = i.length - 3; s <= o; s += 3) { xn.fromArray(i, s); const a = r.x * Math.abs(xn.x) + r.y * Math.abs(xn.y) + r.z * Math.abs(xn.z), c = t.dot(xn), l = e.dot(xn), u = n.dot(xn); if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a) return !1 } return !0 } const Bl = new Pi, gi = new z, Hr = new z; class bs { constructor(t = new z, e = -1) { this.isSphere = !0, this.center = t, this.radius = e } set(t, e) { return this.center.copy(t), this.radius = e, this } setFromPoints(t, e) { const n = this.center; e !== void 0 ? n.copy(e) : Bl.setFromPoints(t).getCenter(n); let r = 0; for (let s = 0, o = t.length; s < o; s++)r = Math.max(r, n.distanceToSquared(t[s])); return this.radius = Math.sqrt(r), this } copy(t) { return this.center.copy(t.center), this.radius = t.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(t) { return t.distanceTo(this.center) - this.radius } intersectsSphere(t) { const e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e } intersectsBox(t) { return t.intersectsSphere(this) } intersectsPlane(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius } clampPoint(t, e) { const n = this.center.distanceToSquared(t); return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e } getBoundingBox(t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t) } applyMatrix4(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this } translate(t) { return this.center.add(t), this } expandByPoint(t) { if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this; gi.subVectors(t, this.center); const e = gi.lengthSq(); if (e > this.radius * this.radius) { const n = Math.sqrt(e), r = (n - this.radius) * .5; this.center.addScaledVector(gi, r / n), this.radius += r } return this } union(t) { return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Hr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(gi.copy(t.center).add(Hr)), this.expandByPoint(gi.copy(t.center).sub(Hr))), this) } equals(t) { return t.center.equals(this.center) && t.radius === this.radius } clone() { return new this.constructor().copy(this) } } const qe = new z, Gr = new z, Gi = new z, nn = new z, Vr = new z, Vi = new z, kr = new z; class Oo { constructor(t = new z, e = new z(0, 0, -1)) { this.origin = t, this.direction = e } set(t, e) { return this.origin.copy(t), this.direction.copy(e), this } copy(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this } at(t, e) { return e.copy(this.origin).addScaledVector(this.direction, t) } lookAt(t) { return this.direction.copy(t).sub(this.origin).normalize(), this } recast(t) { return this.origin.copy(this.at(t, qe)), this } closestPointToPoint(t, e) { e.subVectors(t, this.origin); const n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(t) { return Math.sqrt(this.distanceSqToPoint(t)) } distanceSqToPoint(t) { const e = qe.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (qe.copy(this.origin).addScaledVector(this.direction, e), qe.distanceToSquared(t)) } distanceSqToSegment(t, e, n, r) { Gr.copy(t).add(e).multiplyScalar(.5), Gi.copy(e).sub(t).normalize(), nn.copy(this.origin).sub(Gr); const s = t.distanceTo(e) * .5, o = -this.direction.dot(Gi), a = nn.dot(this.direction), c = -nn.dot(Gi), l = nn.lengthSq(), u = Math.abs(1 - o * o); let f, d, g, _; if (u > 0) if (f = o * c - a, d = o * a - c, _ = s * u, f >= 0) if (d >= -_) if (d <= _) { const x = 1 / u; f *= x, d *= x, g = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * c) + l } else d = s, f = Math.max(0, -(o * d + a)), g = -f * f + d * (d + 2 * c) + l; else d = -s, f = Math.max(0, -(o * d + a)), g = -f * f + d * (d + 2 * c) + l; else d <= -_ ? (f = Math.max(0, -(-o * s + a)), d = f > 0 ? -s : Math.min(Math.max(-s, -c), s), g = -f * f + d * (d + 2 * c) + l) : d <= _ ? (f = 0, d = Math.min(Math.max(-s, -c), s), g = d * (d + 2 * c) + l) : (f = Math.max(0, -(o * s + a)), d = f > 0 ? s : Math.min(Math.max(-s, -c), s), g = -f * f + d * (d + 2 * c) + l); else d = o > 0 ? -s : s, f = Math.max(0, -(o * d + a)), g = -f * f + d * (d + 2 * c) + l; return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Gr).addScaledVector(Gi, d), g } intersectSphere(t, e) { qe.subVectors(t.center, this.origin); const n = qe.dot(this.direction), r = qe.dot(qe) - n * n, s = t.radius * t.radius; if (r > s) return null; const o = Math.sqrt(s - r), a = n - o, c = n + o; return c < 0 ? null : a < 0 ? this.at(c, e) : this.at(a, e) } intersectsSphere(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius } distanceToPlane(t) { const e = t.normal.dot(this.direction); if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null } intersectPlane(t, e) { const n = this.distanceToPlane(t); return n === null ? null : this.at(n, e) } intersectsPlane(t) { const e = t.distanceToPoint(this.origin); return e === 0 || t.normal.dot(this.direction) * e < 0 } intersectBox(t, e) { let n, r, s, o, a, c; const l = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin; return l >= 0 ? (n = (t.min.x - d.x) * l, r = (t.max.x - d.x) * l) : (n = (t.max.x - d.x) * l, r = (t.min.x - d.x) * l), u >= 0 ? (s = (t.min.y - d.y) * u, o = (t.max.y - d.y) * u) : (s = (t.max.y - d.y) * u, o = (t.min.y - d.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (t.min.z - d.z) * f, c = (t.max.z - d.z) * f) : (a = (t.max.z - d.z) * f, c = (t.min.z - d.z) * f), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, e) } intersectsBox(t) { return this.intersectBox(t, qe) !== null } intersectTriangle(t, e, n, r, s) { Vr.subVectors(e, t), Vi.subVectors(n, t), kr.crossVectors(Vr, Vi); let o = this.direction.dot(kr), a; if (o > 0) { if (r) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; nn.subVectors(this.origin, t); const c = a * this.direction.dot(Vi.crossVectors(nn, Vi)); if (c < 0) return null; const l = a * this.direction.dot(Vr.cross(nn)); if (l < 0 || c + l > o) return null; const u = -a * nn.dot(kr); return u < 0 ? null : this.at(u / o, s) } applyMatrix4(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this } equals(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class ie { constructor(t, e, n, r, s, o, a, c, l, u, f, d, g, _, x, p) { ie.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, o, a, c, l, u, f, d, g, _, x, p) } set(t, e, n, r, s, o, a, c, l, u, f, d, g, _, x, p) { const h = this.elements; return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = c, h[2] = l, h[6] = u, h[10] = f, h[14] = d, h[3] = g, h[7] = _, h[11] = x, h[15] = p, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new ie().fromArray(this.elements) } copy(t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this } copyPosition(t) { const e = this.elements, n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this } setFromMatrix3(t) { const e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this } extractBasis(t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(t) { const e = this.elements, n = t.elements, r = 1 / Gn.setFromMatrixColumn(t, 0).length(), s = 1 / Gn.setFromMatrixColumn(t, 1).length(), o = 1 / Gn.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromEuler(t) { const e = this.elements, n = t.x, r = t.y, s = t.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), f = Math.sin(s); if (t.order === "XYZ") { const d = o * u, g = o * f, _ = a * u, x = a * f; e[0] = c * u, e[4] = -c * f, e[8] = l, e[1] = g + _ * l, e[5] = d - x * l, e[9] = -a * c, e[2] = x - d * l, e[6] = _ + g * l, e[10] = o * c } else if (t.order === "YXZ") { const d = c * u, g = c * f, _ = l * u, x = l * f; e[0] = d + x * a, e[4] = _ * a - g, e[8] = o * l, e[1] = o * f, e[5] = o * u, e[9] = -a, e[2] = g * a - _, e[6] = x + d * a, e[10] = o * c } else if (t.order === "ZXY") { const d = c * u, g = c * f, _ = l * u, x = l * f; e[0] = d - x * a, e[4] = -o * f, e[8] = _ + g * a, e[1] = g + _ * a, e[5] = o * u, e[9] = x - d * a, e[2] = -o * l, e[6] = a, e[10] = o * c } else if (t.order === "ZYX") { const d = o * u, g = o * f, _ = a * u, x = a * f; e[0] = c * u, e[4] = _ * l - g, e[8] = d * l + x, e[1] = c * f, e[5] = x * l + d, e[9] = g * l - _, e[2] = -l, e[6] = a * c, e[10] = o * c } else if (t.order === "YZX") { const d = o * c, g = o * l, _ = a * c, x = a * l; e[0] = c * u, e[4] = x - d * f, e[8] = _ * f + g, e[1] = f, e[5] = o * u, e[9] = -a * u, e[2] = -l * u, e[6] = g * f + _, e[10] = d - x * f } else if (t.order === "XZY") { const d = o * c, g = o * l, _ = a * c, x = a * l; e[0] = c * u, e[4] = -f, e[8] = l * u, e[1] = d * f + x, e[5] = o * u, e[9] = g * f - _, e[2] = _ * f - g, e[6] = a * u, e[10] = x * f + d } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromQuaternion(t) { return this.compose(zl, t, Hl) } lookAt(t, e, n) { const r = this.elements; return be.subVectors(t, e), be.lengthSq() === 0 && (be.z = 1), be.normalize(), rn.crossVectors(n, be), rn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? be.x += 1e-4 : be.z += 1e-4, be.normalize(), rn.crossVectors(n, be)), rn.normalize(), ki.crossVectors(be, rn), r[0] = rn.x, r[4] = ki.x, r[8] = be.x, r[1] = rn.y, r[5] = ki.y, r[9] = be.y, r[2] = rn.z, r[6] = ki.z, r[10] = be.z, this } multiply(t) { return this.multiplyMatrices(this, t) } premultiply(t) { return this.multiplyMatrices(t, this) } multiplyMatrices(t, e) { const n = t.elements, r = e.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], f = n[5], d = n[9], g = n[13], _ = n[2], x = n[6], p = n[10], h = n[14], A = n[3], v = n[7], y = n[11], U = n[15], P = r[0], R = r[4], q = r[8], S = r[12], w = r[1], J = r[5], k = r[9], ut = r[13], N = r[2], W = r[6], Z = r[10], j = r[14], B = r[3], it = r[7], nt = r[11], pt = r[15]; return s[0] = o * P + a * w + c * N + l * B, s[4] = o * R + a * J + c * W + l * it, s[8] = o * q + a * k + c * Z + l * nt, s[12] = o * S + a * ut + c * j + l * pt, s[1] = u * P + f * w + d * N + g * B, s[5] = u * R + f * J + d * W + g * it, s[9] = u * q + f * k + d * Z + g * nt, s[13] = u * S + f * ut + d * j + g * pt, s[2] = _ * P + x * w + p * N + h * B, s[6] = _ * R + x * J + p * W + h * it, s[10] = _ * q + x * k + p * Z + h * nt, s[14] = _ * S + x * ut + p * j + h * pt, s[3] = A * P + v * w + y * N + U * B, s[7] = A * R + v * J + y * W + U * it, s[11] = A * q + v * k + y * Z + U * nt, s[15] = A * S + v * ut + y * j + U * pt, this } multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this } determinant() { const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], o = t[1], a = t[5], c = t[9], l = t[13], u = t[2], f = t[6], d = t[10], g = t[14], _ = t[3], x = t[7], p = t[11], h = t[15]; return _ * (+s * c * f - r * l * f - s * a * d + n * l * d + r * a * g - n * c * g) + x * (+e * c * g - e * l * d + s * o * d - r * o * g + r * l * u - s * c * u) + p * (+e * l * f - e * a * g - s * o * f + n * o * g + s * a * u - n * l * u) + h * (-r * a * u - e * c * f + e * a * d + r * o * f - n * o * d + n * c * u) } transpose() { const t = this.elements; let e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this } setPosition(t, e, n) { const r = this.elements; return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this } invert() { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], u = t[8], f = t[9], d = t[10], g = t[11], _ = t[12], x = t[13], p = t[14], h = t[15], A = f * p * l - x * d * l + x * c * g - a * p * g - f * c * h + a * d * h, v = _ * d * l - u * p * l - _ * c * g + o * p * g + u * c * h - o * d * h, y = u * x * l - _ * f * l + _ * a * g - o * x * g - u * a * h + o * f * h, U = _ * f * c - u * x * c - _ * a * d + o * x * d + u * a * p - o * f * p, P = e * A + n * v + r * y + s * U; if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const R = 1 / P; return t[0] = A * R, t[1] = (x * d * s - f * p * s - x * r * g + n * p * g + f * r * h - n * d * h) * R, t[2] = (a * p * s - x * c * s + x * r * l - n * p * l - a * r * h + n * c * h) * R, t[3] = (f * c * s - a * d * s - f * r * l + n * d * l + a * r * g - n * c * g) * R, t[4] = v * R, t[5] = (u * p * s - _ * d * s + _ * r * g - e * p * g - u * r * h + e * d * h) * R, t[6] = (_ * c * s - o * p * s - _ * r * l + e * p * l + o * r * h - e * c * h) * R, t[7] = (o * d * s - u * c * s + u * r * l - e * d * l - o * r * g + e * c * g) * R, t[8] = y * R, t[9] = (_ * f * s - u * x * s - _ * n * g + e * x * g + u * n * h - e * f * h) * R, t[10] = (o * x * s - _ * a * s + _ * n * l - e * x * l - o * n * h + e * a * h) * R, t[11] = (u * a * s - o * f * s - u * n * l + e * f * l + o * n * g - e * a * g) * R, t[12] = U * R, t[13] = (u * x * r - _ * f * r + _ * n * d - e * x * d - u * n * p + e * f * p) * R, t[14] = (_ * a * r - o * x * r - _ * n * c + e * x * c + o * n * p - e * a * p) * R, t[15] = (o * f * r - u * a * r + u * n * c - e * f * c - o * n * d + e * a * d) * R, this } scale(t) { const e = this.elements, n = t.x, r = t.y, s = t.z; return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this } getMaxScaleOnAxis() { const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, r)) } makeTranslation(t, e, n) { return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this } makeRotationY(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this } makeRotationZ(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(t, e) { const n = Math.cos(e), r = Math.sin(e), s = 1 - n, o = t.x, a = t.y, c = t.z, l = s * o, u = s * a; return this.set(l * o + n, l * a - r * c, l * c + r * a, 0, l * a + r * c, u * a + n, u * c - r * o, 0, l * c - r * a, u * c + r * o, s * c * c + n, 0, 0, 0, 0, 1), this } makeScale(t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(t, e, n, r, s, o) { return this.set(1, n, s, 0, t, 1, o, 0, e, r, 1, 0, 0, 0, 0, 1), this } compose(t, e, n) { const r = this.elements, s = e._x, o = e._y, a = e._z, c = e._w, l = s + s, u = o + o, f = a + a, d = s * l, g = s * u, _ = s * f, x = o * u, p = o * f, h = a * f, A = c * l, v = c * u, y = c * f, U = n.x, P = n.y, R = n.z; return r[0] = (1 - (x + h)) * U, r[1] = (g + y) * U, r[2] = (_ - v) * U, r[3] = 0, r[4] = (g - y) * P, r[5] = (1 - (d + h)) * P, r[6] = (p + A) * P, r[7] = 0, r[8] = (_ + v) * R, r[9] = (p - A) * R, r[10] = (1 - (d + x)) * R, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this } decompose(t, e, n) { const r = this.elements; let s = Gn.set(r[0], r[1], r[2]).length(); const o = Gn.set(r[4], r[5], r[6]).length(), a = Gn.set(r[8], r[9], r[10]).length(); this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], De.copy(this); const l = 1 / s, u = 1 / o, f = 1 / a; return De.elements[0] *= l, De.elements[1] *= l, De.elements[2] *= l, De.elements[4] *= u, De.elements[5] *= u, De.elements[6] *= u, De.elements[8] *= f, De.elements[9] *= f, De.elements[10] *= f, e.setFromRotationMatrix(De), n.x = s, n.y = o, n.z = a, this } makePerspective(t, e, n, r, s, o, a = $e) { const c = this.elements, l = 2 * s / (e - t), u = 2 * s / (n - r), f = (e + t) / (e - t), d = (n + r) / (n - r); let g, _; if (a === $e) g = -(o + s) / (o - s), _ = -2 * o * s / (o - s); else if (a === gr) g = -o / (o - s), _ = -o * s / (o - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return c[0] = l, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = u, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this } makeOrthographic(t, e, n, r, s, o, a = $e) { const c = this.elements, l = 1 / (e - t), u = 1 / (n - r), f = 1 / (o - s), d = (e + t) * l, g = (n + r) * u; let _, x; if (a === $e) _ = (o + s) * f, x = -2 * f; else if (a === gr) _ = s * f, x = -1 * f; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * u, c[9] = 0, c[13] = -g, c[2] = 0, c[6] = 0, c[10] = x, c[14] = -_, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this } equals(t) { const e = this.elements, n = t.elements; for (let r = 0; r < 16; r++)if (e[r] !== n[r]) return !1; return !0 } fromArray(t, e = 0) { for (let n = 0; n < 16; n++)this.elements[n] = t[n + e]; return this } toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t } } const Gn = new z, De = new ie, zl = new z(0, 0, 0), Hl = new z(1, 1, 1), rn = new z, ki = new z, be = new z, ba = new ie, Aa = new Cn; class Sr { constructor(t = 0, e = 0, n = 0, r = Sr.DEFAULT_ORDER) { this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r } get x() { return this._x } set x(t) { this._x = t, this._onChangeCallback() } get y() { return this._y } set y(t) { this._y = t, this._onChangeCallback() } get z() { return this._z } set z(t) { this._z = t, this._onChangeCallback() } get order() { return this._order } set order(t) { this._order = t, this._onChangeCallback() } set(t, e, n, r = this._order) { return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this } setFromRotationMatrix(t, e = this._order, n = !0) { const r = t.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], u = r[9], f = r[2], d = r[6], g = r[10]; switch (e) { case "XYZ": this._y = Math.asin(ue(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, g), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0); break; case "YXZ": this._x = Math.asin(-ue(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, g), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, s), this._z = 0); break; case "ZXY": this._x = Math.asin(ue(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-f, g), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s)); break; case "ZYX": this._y = Math.asin(-ue(f, -1, 1)), Math.abs(f) < .9999999 ? (this._x = Math.atan2(d, g), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l)); break; case "YZX": this._z = Math.asin(ue(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, g)); break; case "XZY": this._z = Math.asin(-ue(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, g), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e) }return this._order = e, n === !0 && this._onChangeCallback(), this } setFromQuaternion(t, e, n) { return ba.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ba, e, n) } setFromVector3(t, e = this._order) { return this.set(t.x, t.y, t.z, e) } reorder(t) { return Aa.setFromEuler(this), this.setFromQuaternion(Aa, t) } equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order } fromArray(t) { return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this } toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t } _onChange(t) { return this._onChangeCallback = t, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } Sr.DEFAULT_ORDER = "XYZ"; class Fo { constructor() { this.mask = 1 } set(t) { this.mask = (1 << t | 0) >>> 0 } enable(t) { this.mask |= 1 << t | 0 } enableAll() { this.mask = -1 } toggle(t) { this.mask ^= 1 << t | 0 } disable(t) { this.mask &= ~(1 << t | 0) } disableAll() { this.mask = 0 } test(t) { return (this.mask & t.mask) !== 0 } isEnabled(t) { return (this.mask & (1 << t | 0)) !== 0 } } let Gl = 0; const wa = new z, Vn = new Cn, Ye = new ie, Wi = new z, _i = new z, Vl = new z, kl = new Cn, Ra = new z(1, 0, 0), Ca = new z(0, 1, 0), Pa = new z(0, 0, 1), Wl = { type: "added" }, Xl = { type: "removed" }; class fe extends Dn { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Gl++ }), this.uuid = Un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = fe.DEFAULT_UP.clone(); const t = new z, e = new Sr, n = new Cn, r = new z(1, 1, 1); function s() { n.setFromEuler(e, !1) } function o() { e.setFromQuaternion(n, void 0, !1) } e._onChange(s), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new ie }, normalMatrix: { value: new Ot } }), this.matrix = new ie, this.matrixWorld = new ie, this.matrixAutoUpdate = fe.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Fo, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(t) { return this.quaternion.premultiply(t), this } setRotationFromAxisAngle(t, e) { this.quaternion.setFromAxisAngle(t, e) } setRotationFromEuler(t) { this.quaternion.setFromEuler(t, !0) } setRotationFromMatrix(t) { this.quaternion.setFromRotationMatrix(t) } setRotationFromQuaternion(t) { this.quaternion.copy(t) } rotateOnAxis(t, e) { return Vn.setFromAxisAngle(t, e), this.quaternion.multiply(Vn), this } rotateOnWorldAxis(t, e) { return Vn.setFromAxisAngle(t, e), this.quaternion.premultiply(Vn), this } rotateX(t) { return this.rotateOnAxis(Ra, t) } rotateY(t) { return this.rotateOnAxis(Ca, t) } rotateZ(t) { return this.rotateOnAxis(Pa, t) } translateOnAxis(t, e) { return wa.copy(t).applyQuaternion(this.quaternion), this.position.add(wa.multiplyScalar(e)), this } translateX(t) { return this.translateOnAxis(Ra, t) } translateY(t) { return this.translateOnAxis(Ca, t) } translateZ(t) { return this.translateOnAxis(Pa, t) } localToWorld(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld) } worldToLocal(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Ye.copy(this.matrixWorld).invert()) } lookAt(t, e, n) { t.isVector3 ? Wi.copy(t) : Wi.set(t, e, n); const r = this.parent; this.updateWorldMatrix(!0, !1), _i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ye.lookAt(_i, Wi, this.up) : Ye.lookAt(Wi, _i, this.up), this.quaternion.setFromRotationMatrix(Ye), r && (Ye.extractRotation(r.matrixWorld), Vn.setFromRotationMatrix(Ye), this.quaternion.premultiply(Vn.invert())) } add(t) { if (arguments.length > 1) { for (let e = 0; e < arguments.length; e++)this.add(arguments[e]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Wl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) } remove(t) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const e = this.children.indexOf(t); return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Xl)), this } removeFromParent() { const t = this.parent; return t !== null && t.remove(this), this } clear() { return this.remove(...this.children) } attach(t) { return this.updateWorldMatrix(!0, !1), Ye.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Ye.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ye), this.add(t), t.updateWorldMatrix(!1, !0), this } getObjectById(t) { return this.getObjectByProperty("id", t) } getObjectByName(t) { return this.getObjectByProperty("name", t) } getObjectByProperty(t, e) { if (this[t] === e) return this; for (let n = 0, r = this.children.length; n < r; n++) { const o = this.children[n].getObjectByProperty(t, e); if (o !== void 0) return o } } getObjectsByProperty(t, e, n = []) { this[t] === e && n.push(this); const r = this.children; for (let s = 0, o = r.length; s < o; s++)r[s].getObjectsByProperty(t, e, n); return n } getWorldPosition(t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, t, Vl), t } getWorldScale(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, kl, t), t } getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() } raycast() { } traverse(t) { t(this); const e = this.children; for (let n = 0, r = e.length; n < r; n++)e[n].traverse(t) } traverseVisible(t) { if (this.visible === !1) return; t(this); const e = this.children; for (let n = 0, r = e.length; n < r; n++)e[n].traverseVisible(t) } traverseAncestors(t) { const e = this.parent; e !== null && (t(e), e.traverseAncestors(t)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); const e = this.children; for (let n = 0, r = e.length; n < r; n++) { const s = e[n]; (s.matrixWorldAutoUpdate === !0 || t === !0) && s.updateMatrixWorld(t) } } updateWorldMatrix(t, e) { const n = this.parent; if (t === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) { const r = this.children; for (let s = 0, o = r.length; s < o; s++) { const a = r[s]; a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0) } } } toJSON(t) { const e = t === void 0 || typeof t == "string", n = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const r = {}; r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), r.maxGeometryCount = this._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() })); function s(a, c) { return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(t)), c.uuid } if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) { r.geometry = s(t.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const c = a.shapes; if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) { const f = c[l]; s(t.shapes, f) } else s(t.shapes, c) } } if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let c = 0, l = this.material.length; c < l; c++)a.push(s(t.materials, this.material[c])); r.material = a } else r.material = s(t.materials, this.material); if (this.children.length > 0) { r.children = []; for (let a = 0; a < this.children.length; a++)r.children.push(this.children[a].toJSON(t).object) } if (this.animations.length > 0) { r.animations = []; for (let a = 0; a < this.animations.length; a++) { const c = this.animations[a]; r.animations.push(s(t.animations, c)) } } if (e) { const a = o(t.geometries), c = o(t.materials), l = o(t.textures), u = o(t.images), f = o(t.shapes), d = o(t.skeletons), g = o(t.animations), _ = o(t.nodes); a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), g.length > 0 && (n.animations = g), _.length > 0 && (n.nodes = _) } return n.object = r, n; function o(a) { const c = []; for (const l in a) { const u = a[l]; delete u.metadata, c.push(u) } return c } } clone(t) { return new this.constructor().copy(this, t) } copy(t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for (let n = 0; n < t.children.length; n++) { const r = t.children[n]; this.add(r.clone()) } return this } } fe.DEFAULT_UP = new z(0, 1, 0); fe.DEFAULT_MATRIX_AUTO_UPDATE = !0; fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Ue = new z, je = new z, Wr = new z, Ze = new z, kn = new z, Wn = new z, La = new z, Xr = new z, qr = new z, Yr = new z; let Xi = !1; class Ie { constructor(t = new z, e = new z, n = new z) { this.a = t, this.b = e, this.c = n } static getNormal(t, e, n, r) { r.subVectors(n, e), Ue.subVectors(t, e), r.cross(Ue); const s = r.lengthSq(); return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0) } static getBarycoord(t, e, n, r, s) { Ue.subVectors(r, e), je.subVectors(n, e), Wr.subVectors(t, e); const o = Ue.dot(Ue), a = Ue.dot(je), c = Ue.dot(Wr), l = je.dot(je), u = je.dot(Wr), f = o * l - a * a; if (f === 0) return s.set(0, 0, 0), null; const d = 1 / f, g = (l * c - a * u) * d, _ = (o * u - a * c) * d; return s.set(1 - g - _, _, g) } static containsPoint(t, e, n, r) { return this.getBarycoord(t, e, n, r, Ze) === null ? !1 : Ze.x >= 0 && Ze.y >= 0 && Ze.x + Ze.y <= 1 } static getUV(t, e, n, r, s, o, a, c) { return Xi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xi = !0), this.getInterpolation(t, e, n, r, s, o, a, c) } static getInterpolation(t, e, n, r, s, o, a, c) { return this.getBarycoord(t, e, n, r, Ze) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Ze.x), c.addScaledVector(o, Ze.y), c.addScaledVector(a, Ze.z), c) } static isFrontFacing(t, e, n, r) { return Ue.subVectors(n, e), je.subVectors(t, e), Ue.cross(je).dot(r) < 0 } set(t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this } setFromPointsAndIndices(t, e, n, r) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this } setFromAttributeAndIndices(t, e, n, r) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this } clone() { return new this.constructor().copy(this) } copy(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this } getArea() { return Ue.subVectors(this.c, this.b), je.subVectors(this.a, this.b), Ue.cross(je).length() * .5 } getMidpoint(t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(t) { return Ie.getNormal(this.a, this.b, this.c, t) } getPlane(t) { return t.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(t, e) { return Ie.getBarycoord(t, this.a, this.b, this.c, e) } getUV(t, e, n, r, s) { return Xi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xi = !0), Ie.getInterpolation(t, this.a, this.b, this.c, e, n, r, s) } getInterpolation(t, e, n, r, s) { return Ie.getInterpolation(t, this.a, this.b, this.c, e, n, r, s) } containsPoint(t) { return Ie.containsPoint(t, this.a, this.b, this.c) } isFrontFacing(t) { return Ie.isFrontFacing(this.a, this.b, this.c, t) } intersectsBox(t) { return t.intersectsTriangle(this) } closestPointToPoint(t, e) { const n = this.a, r = this.b, s = this.c; let o, a; kn.subVectors(r, n), Wn.subVectors(s, n), Xr.subVectors(t, n); const c = kn.dot(Xr), l = Wn.dot(Xr); if (c <= 0 && l <= 0) return e.copy(n); qr.subVectors(t, r); const u = kn.dot(qr), f = Wn.dot(qr); if (u >= 0 && f <= u) return e.copy(r); const d = c * f - u * l; if (d <= 0 && c >= 0 && u <= 0) return o = c / (c - u), e.copy(n).addScaledVector(kn, o); Yr.subVectors(t, s); const g = kn.dot(Yr), _ = Wn.dot(Yr); if (_ >= 0 && g <= _) return e.copy(s); const x = g * l - c * _; if (x <= 0 && l >= 0 && _ <= 0) return a = l / (l - _), e.copy(n).addScaledVector(Wn, a); const p = u * _ - g * f; if (p <= 0 && f - u >= 0 && g - _ >= 0) return La.subVectors(s, r), a = (f - u) / (f - u + (g - _)), e.copy(r).addScaledVector(La, a); const h = 1 / (p + x + d); return o = x * h, a = d * h, e.copy(n).addScaledVector(kn, o).addScaledVector(Wn, a) } equals(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } } const Bo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, sn = { h: 0, s: 0, l: 0 }, qi = { h: 0, s: 0, l: 0 }; function jr(i, t, e) { return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i } class Yt { constructor(t, e, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n) } set(t, e, n) { if (e === void 0 && n === void 0) { const r = t; r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r) } else this.setRGB(t, e, n); return this } setScalar(t) { return this.r = t, this.g = t, this.b = t, this } setHex(t, e = re) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Zt.toWorkingColorSpace(this, e), this } setRGB(t, e, n, r = Zt.workingColorSpace) { return this.r = t, this.g = e, this.b = n, Zt.toWorkingColorSpace(this, r), this } setHSL(t, e, n, r = Zt.workingColorSpace) { if (t = Ts(t, 1), e = ue(e, 0, 1), n = ue(n, 0, 1), e === 0) this.r = this.g = this.b = n; else { const s = n <= .5 ? n * (1 + e) : n + e - n * e, o = 2 * n - s; this.r = jr(o, s, t + 1 / 3), this.g = jr(o, s, t), this.b = jr(o, s, t - 1 / 3) } return Zt.toWorkingColorSpace(this, r), this } setStyle(t, e = re) { function n(s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") } let r; if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) { let s; const o = r[1], a = r[2]; switch (o) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e); break; default: console.warn("THREE.Color: Unknown color model " + t) } } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) { const s = r[1], o = s.length; if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e); if (o === 6) return this.setHex(parseInt(s, 16), e); console.warn("THREE.Color: Invalid hex color " + t) } else if (t && t.length > 0) return this.setColorName(t, e); return this } setColorName(t, e = re) { const n = Bo[t.toLowerCase()]; return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this } copySRGBToLinear(t) { return this.r = ri(t.r), this.g = ri(t.g), this.b = ri(t.b), this } copyLinearToSRGB(t) { return this.r = Or(t.r), this.g = Or(t.g), this.b = Or(t.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(t = re) { return Zt.fromWorkingColorSpace(me.copy(this), t), Math.round(ue(me.r * 255, 0, 255)) * 65536 + Math.round(ue(me.g * 255, 0, 255)) * 256 + Math.round(ue(me.b * 255, 0, 255)) } getHexString(t = re) { return ("000000" + this.getHex(t).toString(16)).slice(-6) } getHSL(t, e = Zt.workingColorSpace) { Zt.fromWorkingColorSpace(me.copy(this), e); const n = me.r, r = me.g, s = me.b, o = Math.max(n, r, s), a = Math.min(n, r, s); let c, l; const u = (a + o) / 2; if (a === o) c = 0, l = 0; else { const f = o - a; switch (l = u <= .5 ? f / (o + a) : f / (2 - o - a), o) { case n: c = (r - s) / f + (r < s ? 6 : 0); break; case r: c = (s - n) / f + 2; break; case s: c = (n - r) / f + 4; break }c /= 6 } return t.h = c, t.s = l, t.l = u, t } getRGB(t, e = Zt.workingColorSpace) { return Zt.fromWorkingColorSpace(me.copy(this), e), t.r = me.r, t.g = me.g, t.b = me.b, t } getStyle(t = re) { Zt.fromWorkingColorSpace(me.copy(this), t); const e = me.r, n = me.g, r = me.b; return t !== re ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` } offsetHSL(t, e, n) { return this.getHSL(sn), this.setHSL(sn.h + t, sn.s + e, sn.l + n) } add(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this } addColors(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this } addScalar(t) { return this.r += t, this.g += t, this.b += t, this } sub(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this } multiply(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this } multiplyScalar(t) { return this.r *= t, this.g *= t, this.b *= t, this } lerp(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this } lerpColors(t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this } lerpHSL(t, e) { this.getHSL(sn), t.getHSL(qi); const n = Mi(sn.h, qi.h, e), r = Mi(sn.s, qi.s, e), s = Mi(sn.l, qi.l, e); return this.setHSL(n, r, s), this } setFromVector3(t) { return this.r = t.x, this.g = t.y, this.b = t.z, this } applyMatrix3(t) { const e = this.r, n = this.g, r = this.b, s = t.elements; return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this } equals(t) { return t.r === this.r && t.g === this.g && t.b === this.b } fromArray(t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this } toArray(t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t } fromBufferAttribute(t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const me = new Yt; Yt.NAMES = Bo; let ql = 0; class Li extends Dn { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ql++ }), this.uuid = Un(), this.name = "", this.type = "Material", this.blending = ii, this.side = fn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = us, this.blendDst = hs, this.blendEquation = En, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Yt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = fr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = _a, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = On, this.stencilZFail = On, this.stencilZPass = On, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t } onBuild() { } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(t) { if (t !== void 0) for (const e in t) { const n = t[e]; if (n === void 0) { console.warn(`THREE.Material: parameter '${e}' has value of undefined.`); continue } const r = this[e]; if (r === void 0) { console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`); continue } r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n } } toJSON(t) { const e = t === void 0 || typeof t == "string"; e && (t = { textures: {}, images: {} }); const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ii && (n.blending = this.blending), this.side !== fn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== us && (n.blendSrc = this.blendSrc), this.blendDst !== hs && (n.blendDst = this.blendDst), this.blendEquation !== En && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== fr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== _a && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== On && (n.stencilFail = this.stencilFail), this.stencilZFail !== On && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== On && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function r(s) { const o = []; for (const a in s) { const c = s[a]; delete c.metadata, o.push(c) } return o } if (e) { const s = r(t.textures), o = r(t.images); s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o) } return n } clone() { return new this.constructor().copy(this) } copy(t) { this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; const e = t.clippingPlanes; let n = null; if (e !== null) { const r = e.length; n = new Array(r); for (let s = 0; s !== r; ++s)n[s] = e[s].clone() } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(t) { t === !0 && this.version++ } } class zo extends Li { constructor(t) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Yt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Mo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t) } copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this } } const ne = new z, Yi = new dt; class Ge { constructor(t, e, n = !1) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = xa, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = cn, this.version = 0 } onUploadCallback() { } set needsUpdate(t) { t === !0 && this.version++ } get updateRange() { return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(t) { return this.usage = t, this } addUpdateRange(t, e) { this.updateRanges.push({ start: t, count: e }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this } copyAt(t, e, n) { t *= this.itemSize, n *= e.itemSize; for (let r = 0, s = this.itemSize; r < s; r++)this.array[t + r] = e.array[n + r]; return this } copyArray(t) { return this.array.set(t), this } applyMatrix3(t) { if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++)Yi.fromBufferAttribute(this, e), Yi.applyMatrix3(t), this.setXY(e, Yi.x, Yi.y); else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++)ne.fromBufferAttribute(this, e), ne.applyMatrix3(t), this.setXYZ(e, ne.x, ne.y, ne.z); return this } applyMatrix4(t) { for (let e = 0, n = this.count; e < n; e++)ne.fromBufferAttribute(this, e), ne.applyMatrix4(t), this.setXYZ(e, ne.x, ne.y, ne.z); return this } applyNormalMatrix(t) { for (let e = 0, n = this.count; e < n; e++)ne.fromBufferAttribute(this, e), ne.applyNormalMatrix(t), this.setXYZ(e, ne.x, ne.y, ne.z); return this } transformDirection(t) { for (let e = 0, n = this.count; e < n; e++)ne.fromBufferAttribute(this, e), ne.transformDirection(t), this.setXYZ(e, ne.x, ne.y, ne.z); return this } set(t, e = 0) { return this.array.set(t, e), this } getComponent(t, e) { let n = this.array[t * this.itemSize + e]; return this.normalized && (n = Qn(n, this.array)), n } setComponent(t, e, n) { return this.normalized && (n = xe(n, this.array)), this.array[t * this.itemSize + e] = n, this } getX(t) { let e = this.array[t * this.itemSize]; return this.normalized && (e = Qn(e, this.array)), e } setX(t, e) { return this.normalized && (e = xe(e, this.array)), this.array[t * this.itemSize] = e, this } getY(t) { let e = this.array[t * this.itemSize + 1]; return this.normalized && (e = Qn(e, this.array)), e } setY(t, e) { return this.normalized && (e = xe(e, this.array)), this.array[t * this.itemSize + 1] = e, this } getZ(t) { let e = this.array[t * this.itemSize + 2]; return this.normalized && (e = Qn(e, this.array)), e } setZ(t, e) { return this.normalized && (e = xe(e, this.array)), this.array[t * this.itemSize + 2] = e, this } getW(t) { let e = this.array[t * this.itemSize + 3]; return this.normalized && (e = Qn(e, this.array)), e } setW(t, e) { return this.normalized && (e = xe(e, this.array)), this.array[t * this.itemSize + 3] = e, this } setXY(t, e, n) { return t *= this.itemSize, this.normalized && (e = xe(e, this.array), n = xe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this } setXYZ(t, e, n, r) { return t *= this.itemSize, this.normalized && (e = xe(e, this.array), n = xe(n, this.array), r = xe(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this } setXYZW(t, e, n, r, s) { return t *= this.itemSize, this.normalized && (e = xe(e, this.array), n = xe(n, this.array), r = xe(r, this.array), s = xe(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this } onUpload(t) { return this.onUploadCallback = t, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (t.name = this.name), this.usage !== xa && (t.usage = this.usage), t } } class Ho extends Ge { constructor(t, e, n) { super(new Uint16Array(t), e, n) } } class Go extends Ge { constructor(t, e, n) { super(new Uint32Array(t), e, n) } } class Ve extends Ge { constructor(t, e, n) { super(new Float32Array(t), e, n) } } let Yl = 0; const Ce = new ie, Zr = new fe, Xn = new z, Ae = new Pi, xi = new Pi, le = new z; class dn extends Dn { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Yl++ }), this.uuid = Un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(t) { return Array.isArray(t) ? this.index = new (Do(t) ? Go : Ho)(t, 1) : this.index = t, this } getAttribute(t) { return this.attributes[t] } setAttribute(t, e) { return this.attributes[t] = e, this } deleteAttribute(t) { return delete this.attributes[t], this } hasAttribute(t) { return this.attributes[t] !== void 0 } addGroup(t, e, n = 0) { this.groups.push({ start: t, count: e, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(t, e) { this.drawRange.start = t, this.drawRange.count = e } applyMatrix4(t) { const e = this.attributes.position; e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const s = new Ot().getNormalMatrix(t); n.applyNormalMatrix(s), n.needsUpdate = !0 } const r = this.attributes.tangent; return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(t) { return Ce.makeRotationFromQuaternion(t), this.applyMatrix4(Ce), this } rotateX(t) { return Ce.makeRotationX(t), this.applyMatrix4(Ce), this } rotateY(t) { return Ce.makeRotationY(t), this.applyMatrix4(Ce), this } rotateZ(t) { return Ce.makeRotationZ(t), this.applyMatrix4(Ce), this } translate(t, e, n) { return Ce.makeTranslation(t, e, n), this.applyMatrix4(Ce), this } scale(t, e, n) { return Ce.makeScale(t, e, n), this.applyMatrix4(Ce), this } lookAt(t) { return Zr.lookAt(t), Zr.updateMatrix(), this.applyMatrix4(Zr.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Xn).negate(), this.translate(Xn.x, Xn.y, Xn.z), this } setFromPoints(t) { const e = []; for (let n = 0, r = t.length; n < r; n++) { const s = t[n]; e.push(s.x, s.y, s.z || 0) } return this.setAttribute("position", new Ve(e, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Pi); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new z(-1 / 0, -1 / 0, -1 / 0), new z(1 / 0, 1 / 0, 1 / 0)); return } if (t !== void 0) { if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, r = e.length; n < r; n++) { const s = e[n]; Ae.setFromBufferAttribute(s), this.morphTargetsRelative ? (le.addVectors(this.boundingBox.min, Ae.min), this.boundingBox.expandByPoint(le), le.addVectors(this.boundingBox.max, Ae.max), this.boundingBox.expandByPoint(le)) : (this.boundingBox.expandByPoint(Ae.min), this.boundingBox.expandByPoint(Ae.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new bs); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new z, 1 / 0); return } if (t) { const n = this.boundingSphere.center; if (Ae.setFromBufferAttribute(t), e) for (let s = 0, o = e.length; s < o; s++) { const a = e[s]; xi.setFromBufferAttribute(a), this.morphTargetsRelative ? (le.addVectors(Ae.min, xi.min), Ae.expandByPoint(le), le.addVectors(Ae.max, xi.max), Ae.expandByPoint(le)) : (Ae.expandByPoint(xi.min), Ae.expandByPoint(xi.max)) } Ae.getCenter(n); let r = 0; for (let s = 0, o = t.count; s < o; s++)le.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(le)); if (e) for (let s = 0, o = e.length; s < o; s++) { const a = e[s], c = this.morphTargetsRelative; for (let l = 0, u = a.count; l < u; l++)le.fromBufferAttribute(a, l), c && (Xn.fromBufferAttribute(t, l), le.add(Xn)), r = Math.max(r, n.distanceToSquared(le)) } this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const t = this.index, e = this.attributes; if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = t.array, r = e.position.array, s = e.normal.array, o = e.uv.array, a = r.length / 3; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ge(new Float32Array(4 * a), 4)); const c = this.getAttribute("tangent").array, l = [], u = []; for (let w = 0; w < a; w++)l[w] = new z, u[w] = new z; const f = new z, d = new z, g = new z, _ = new dt, x = new dt, p = new dt, h = new z, A = new z; function v(w, J, k) { f.fromArray(r, w * 3), d.fromArray(r, J * 3), g.fromArray(r, k * 3), _.fromArray(o, w * 2), x.fromArray(o, J * 2), p.fromArray(o, k * 2), d.sub(f), g.sub(f), x.sub(_), p.sub(_); const ut = 1 / (x.x * p.y - p.x * x.y); isFinite(ut) && (h.copy(d).multiplyScalar(p.y).addScaledVector(g, -x.y).multiplyScalar(ut), A.copy(g).multiplyScalar(x.x).addScaledVector(d, -p.x).multiplyScalar(ut), l[w].add(h), l[J].add(h), l[k].add(h), u[w].add(A), u[J].add(A), u[k].add(A)) } let y = this.groups; y.length === 0 && (y = [{ start: 0, count: n.length }]); for (let w = 0, J = y.length; w < J; ++w) { const k = y[w], ut = k.start, N = k.count; for (let W = ut, Z = ut + N; W < Z; W += 3)v(n[W + 0], n[W + 1], n[W + 2]) } const U = new z, P = new z, R = new z, q = new z; function S(w) { R.fromArray(s, w * 3), q.copy(R); const J = l[w]; U.copy(J), U.sub(R.multiplyScalar(R.dot(J))).normalize(), P.crossVectors(q, J); const ut = P.dot(u[w]) < 0 ? -1 : 1; c[w * 4] = U.x, c[w * 4 + 1] = U.y, c[w * 4 + 2] = U.z, c[w * 4 + 3] = ut } for (let w = 0, J = y.length; w < J; ++w) { const k = y[w], ut = k.start, N = k.count; for (let W = ut, Z = ut + N; W < Z; W += 3)S(n[W + 0]), S(n[W + 1]), S(n[W + 2]) } } computeVertexNormals() { const t = this.index, e = this.getAttribute("position"); if (e !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new Ge(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, g = n.count; d < g; d++)n.setXYZ(d, 0, 0, 0); const r = new z, s = new z, o = new z, a = new z, c = new z, l = new z, u = new z, f = new z; if (t) for (let d = 0, g = t.count; d < g; d += 3) { const _ = t.getX(d + 0), x = t.getX(d + 1), p = t.getX(d + 2); r.fromBufferAttribute(e, _), s.fromBufferAttribute(e, x), o.fromBufferAttribute(e, p), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), a.fromBufferAttribute(n, _), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, p), a.add(u), c.add(u), l.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z) } else for (let d = 0, g = e.count; d < g; d += 3)r.fromBufferAttribute(e, d + 0), s.fromBufferAttribute(e, d + 1), o.fromBufferAttribute(e, d + 2), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const t = this.attributes.normal; for (let e = 0, n = t.count; e < n; e++)le.fromBufferAttribute(t, e), le.normalize(), t.setXYZ(e, le.x, le.y, le.z) } toNonIndexed() { function t(a, c) { const l = a.array, u = a.itemSize, f = a.normalized, d = new l.constructor(c.length * u); let g = 0, _ = 0; for (let x = 0, p = c.length; x < p; x++) { a.isInterleavedBufferAttribute ? g = c[x] * a.data.stride + a.offset : g = c[x] * u; for (let h = 0; h < u; h++)d[_++] = l[g++] } return new Ge(d, u, f) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const e = new dn, n = this.index.array, r = this.attributes; for (const a in r) { const c = r[a], l = t(c, n); e.setAttribute(a, l) } const s = this.morphAttributes; for (const a in s) { const c = [], l = s[a]; for (let u = 0, f = l.length; u < f; u++) { const d = l[u], g = t(d, n); c.push(g) } e.morphAttributes[a] = c } e.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, c = o.length; a < c; a++) { const l = o[a]; e.addGroup(l.start, l.count, l.materialIndex) } return e } toJSON() { const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) { const c = this.parameters; for (const l in c) c[l] !== void 0 && (t[l] = c[l]); return t } t.data = { attributes: {} }; const e = this.index; e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); const n = this.attributes; for (const c in n) { const l = n[c]; t.data.attributes[c] = l.toJSON(t.data) } const r = {}; let s = !1; for (const c in this.morphAttributes) { const l = this.morphAttributes[c], u = []; for (let f = 0, d = l.length; f < d; f++) { const g = l[f]; u.push(g.toJSON(t.data)) } u.length > 0 && (r[c] = u, s = !0) } s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t } clone() { return new this.constructor().copy(this) } copy(t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const e = {}; this.name = t.name; const n = t.index; n !== null && this.setIndex(n.clone(e)); const r = t.attributes; for (const l in r) { const u = r[l]; this.setAttribute(l, u.clone(e)) } const s = t.morphAttributes; for (const l in s) { const u = [], f = s[l]; for (let d = 0, g = f.length; d < g; d++)u.push(f[d].clone(e)); this.morphAttributes[l] = u } this.morphTargetsRelative = t.morphTargetsRelative; const o = t.groups; for (let l = 0, u = o.length; l < u; l++) { const f = o[l]; this.addGroup(f.start, f.count, f.materialIndex) } const a = t.boundingBox; a !== null && (this.boundingBox = a.clone()); const c = t.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Da = new ie, vn = new Oo, ji = new bs, Ua = new z, qn = new z, Yn = new z, jn = new z, Kr = new z, Zi = new z, Ki = new dt, Ji = new dt, $i = new dt, Ia = new z, Na = new z, Oa = new z, Qi = new z, tr = new z; class He extends fe { constructor(t = new dn, e = new zo) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets() } copy(t, e) { return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this } updateMorphTargets() { const e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) { const r = e[n[0]]; if (r !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r.length; s < o; s++) { const a = r[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s } } } } getVertexPosition(t, e) { const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative; e.fromBufferAttribute(r, t); const a = this.morphTargetInfluences; if (s && a) { Zi.set(0, 0, 0); for (let c = 0, l = s.length; c < l; c++) { const u = a[c], f = s[c]; u !== 0 && (Kr.fromBufferAttribute(f, t), o ? Zi.addScaledVector(Kr, u) : Zi.addScaledVector(Kr.sub(e), u)) } e.add(Zi) } return e } raycast(t, e) { const n = this.geometry, r = this.material, s = this.matrixWorld; r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ji.copy(n.boundingSphere), ji.applyMatrix4(s), vn.copy(t.ray).recast(t.near), !(ji.containsPoint(vn.origin) === !1 && (vn.intersectSphere(ji, Ua) === null || vn.origin.distanceToSquared(Ua) > (t.far - t.near) ** 2)) && (Da.copy(s).invert(), vn.copy(t.ray).applyMatrix4(Da), !(n.boundingBox !== null && vn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, vn))) } _computeIntersections(t, e, n) { let r; const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, f = s.attributes.normal, d = s.groups, g = s.drawRange; if (a !== null) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) { const p = d[_], h = o[p.materialIndex], A = Math.max(p.start, g.start), v = Math.min(a.count, Math.min(p.start + p.count, g.start + g.count)); for (let y = A, U = v; y < U; y += 3) { const P = a.getX(y), R = a.getX(y + 1), q = a.getX(y + 2); r = er(this, h, t, n, l, u, f, P, R, q), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, e.push(r)) } } else { const _ = Math.max(0, g.start), x = Math.min(a.count, g.start + g.count); for (let p = _, h = x; p < h; p += 3) { const A = a.getX(p), v = a.getX(p + 1), y = a.getX(p + 2); r = er(this, o, t, n, l, u, f, A, v, y), r && (r.faceIndex = Math.floor(p / 3), e.push(r)) } } else if (c !== void 0) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) { const p = d[_], h = o[p.materialIndex], A = Math.max(p.start, g.start), v = Math.min(c.count, Math.min(p.start + p.count, g.start + g.count)); for (let y = A, U = v; y < U; y += 3) { const P = y, R = y + 1, q = y + 2; r = er(this, h, t, n, l, u, f, P, R, q), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, e.push(r)) } } else { const _ = Math.max(0, g.start), x = Math.min(c.count, g.start + g.count); for (let p = _, h = x; p < h; p += 3) { const A = p, v = p + 1, y = p + 2; r = er(this, o, t, n, l, u, f, A, v, y), r && (r.faceIndex = Math.floor(p / 3), e.push(r)) } } } } function jl(i, t, e, n, r, s, o, a) { let c; if (t.side === Ee ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, t.side === fn, a), c === null) return null; tr.copy(a), tr.applyMatrix4(i.matrixWorld); const l = e.ray.origin.distanceTo(tr); return l < e.near || l > e.far ? null : { distance: l, point: tr.clone(), object: i } } function er(i, t, e, n, r, s, o, a, c, l) { i.getVertexPosition(a, qn), i.getVertexPosition(c, Yn), i.getVertexPosition(l, jn); const u = jl(i, t, e, n, qn, Yn, jn, Qi); if (u) { r && (Ki.fromBufferAttribute(r, a), Ji.fromBufferAttribute(r, c), $i.fromBufferAttribute(r, l), u.uv = Ie.getInterpolation(Qi, qn, Yn, jn, Ki, Ji, $i, new dt)), s && (Ki.fromBufferAttribute(s, a), Ji.fromBufferAttribute(s, c), $i.fromBufferAttribute(s, l), u.uv1 = Ie.getInterpolation(Qi, qn, Yn, jn, Ki, Ji, $i, new dt), u.uv2 = u.uv1), o && (Ia.fromBufferAttribute(o, a), Na.fromBufferAttribute(o, c), Oa.fromBufferAttribute(o, l), u.normal = Ie.getInterpolation(Qi, qn, Yn, jn, Ia, Na, Oa, new z), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)); const f = { a, b: c, c: l, normal: new z, materialIndex: 0 }; Ie.getNormal(qn, Yn, jn, f.normal), u.face = f } return u } class Di extends dn { constructor(t = 1, e = 1, n = 1, r = 1, s = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: r, heightSegments: s, depthSegments: o }; const a = this; r = Math.floor(r), s = Math.floor(s), o = Math.floor(o); const c = [], l = [], u = [], f = []; let d = 0, g = 0; _("z", "y", "x", -1, -1, n, e, t, o, s, 0), _("z", "y", "x", 1, -1, n, e, -t, o, s, 1), _("x", "z", "y", 1, 1, t, n, e, r, o, 2), _("x", "z", "y", 1, -1, t, n, -e, r, o, 3), _("x", "y", "z", 1, -1, t, e, n, r, s, 4), _("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Ve(l, 3)), this.setAttribute("normal", new Ve(u, 3)), this.setAttribute("uv", new Ve(f, 2)); function _(x, p, h, A, v, y, U, P, R, q, S) { const w = y / R, J = U / q, k = y / 2, ut = U / 2, N = P / 2, W = R + 1, Z = q + 1; let j = 0, B = 0; const it = new z; for (let nt = 0; nt < Z; nt++) { const pt = nt * J - ut; for (let mt = 0; mt < W; mt++) { const tt = mt * w - k; it[x] = tt * A, it[p] = pt * v, it[h] = N, l.push(it.x, it.y, it.z), it[x] = 0, it[p] = 0, it[h] = P > 0 ? 1 : -1, u.push(it.x, it.y, it.z), f.push(mt / R), f.push(1 - nt / q), j += 1 } } for (let nt = 0; nt < q; nt++)for (let pt = 0; pt < R; pt++) { const mt = d + pt + W * nt, tt = d + pt + W * (nt + 1), D = d + (pt + 1) + W * (nt + 1), C = d + (pt + 1) + W * nt; c.push(mt, tt, C), c.push(tt, D, C), B += 6 } a.addGroup(g, B, S), g += B, d += j } } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new Di(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments) } } function fi(i) { const t = {}; for (const e in i) { t[e] = {}; for (const n in i[e]) { const r = i[e][n]; r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r } } return t } function ve(i) { const t = {}; for (let e = 0; e < i.length; e++) { const n = fi(i[e]); for (const r in n) t[r] = n[r] } return t } function Zl(i) { const t = []; for (let e = 0; e < i.length; e++)t.push(i[e].clone()); return t } function Vo(i) { return i.getRenderTarget() === null ? i.outputColorSpace : Zt.workingColorSpace } const Kl = { clone: fi, merge: ve }; var Jl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, $l = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class Pn extends Li { constructor(t) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Jl, this.fragmentShader = $l, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1, clipCullDistance: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t) } copy(t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = fi(t.uniforms), this.uniformsGroups = Zl(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this } toJSON(t) { const e = super.toJSON(t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (const r in this.uniforms) { const o = this.uniforms[r].value; o && o.isTexture ? e.uniforms[r] = { type: "t", value: o.toJSON(t).uuid } : o && o.isColor ? e.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? e.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? e.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? e.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? e.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? e.uniforms[r] = { type: "m4", value: o.toArray() } : e.uniforms[r] = { value: o } } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping; const n = {}; for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e } } class ko extends fe { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ie, this.projectionMatrix = new ie, this.projectionMatrixInverse = new ie, this.coordinateSystem = $e } copy(t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this } getWorldDirection(t) { return super.getWorldDirection(t).negate() } updateMatrixWorld(t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } class we extends ko { constructor(t = 50, e = 1, n = .1, r = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this } setFocalLength(t) { const e = .5 * this.getFilmHeight() / t; this.fov = hi * 2 * Math.atan(e), this.updateProjectionMatrix() } getFocalLength() { const t = Math.tan(vi * .5 * this.fov); return .5 * this.getFilmHeight() / t } getEffectiveFOV() { return hi * 2 * Math.atan(Math.tan(vi * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } setViewOffset(t, e, n, r, s, o) { this.aspect = t / e, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const t = this.near; let e = t * Math.tan(vi * .5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -.5 * r; const o = this.view; if (this.view !== null && this.view.enabled) { const c = o.fullWidth, l = o.fullHeight; s += o.offsetX * r / c, e -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l } const a = this.filmOffset; a !== 0 && (s += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(t) { const e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } } const Zn = -90, Kn = 1; class Ql extends fe { constructor(t, e, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const r = new we(Zn, Kn, t, e); r.layers = this.layers, this.add(r); const s = new we(Zn, Kn, t, e); s.layers = this.layers, this.add(s); const o = new we(Zn, Kn, t, e); o.layers = this.layers, this.add(o); const a = new we(Zn, Kn, t, e); a.layers = this.layers, this.add(a); const c = new we(Zn, Kn, t, e); c.layers = this.layers, this.add(c); const l = new we(Zn, Kn, t, e); l.layers = this.layers, this.add(l) } updateCoordinateSystem() { const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, o, a, c] = e; for (const l of e) this.remove(l); if (t === $e) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1); else if (t === gr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t); for (const l of e) this.add(l), l.updateMatrixWorld() } update(t, e) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: r } = this; this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem()); const [s, o, a, c, l, u] = this.children, f = t.getRenderTarget(), d = t.getActiveCubeFace(), g = t.getActiveMipmapLevel(), _ = t.xr.enabled; t.xr.enabled = !1; const x = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, o), t.setRenderTarget(n, 2, r), t.render(e, a), t.setRenderTarget(n, 3, r), t.render(e, c), t.setRenderTarget(n, 4, r), t.render(e, l), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(f, d, g), t.xr.enabled = _, n.texture.needsPMREMUpdate = !0 } } class Wo extends Se { constructor(t, e, n, r, s, o, a, c, l, u) { t = t !== void 0 ? t : [], e = e !== void 0 ? e : oi, super(t, e, n, r, s, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(t) { this.image = t } } class tu extends Rn {
	constructor(t = 1, e = {}) { super(t, t, e), this.isWebGLCubeRenderTarget = !0; const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n]; e.encoding !== void 0 && (Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e.colorSpace = e.encoding === wn ? re : Pe), this.texture = new Wo(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ye } fromEquirectangularTexture(t, e) {
		this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, r = new Di(5, 5, 5), s = new Pn({ name: "CubemapFromEquirect", uniforms: fi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ee, blending: ln }); s.uniforms.tEquirect.value = e; const o = new He(r, s), a = e.minFilter; return e.minFilter === Ti && (e.minFilter = ye), new Ql(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear(t, e, n, r) { const s = t.getRenderTarget(); for (let o = 0; o < 6; o++)t.setRenderTarget(this, o), t.clear(e, n, r); t.setRenderTarget(s) }
} const Jr = new z, eu = new z, nu = new Ot; class an { constructor(t = new z(1, 0, 0), e = 0) { this.isPlane = !0, this.normal = t, this.constant = e } set(t, e) { return this.normal.copy(t), this.constant = e, this } setComponents(t, e, n, r) { return this.normal.set(t, e, n), this.constant = r, this } setFromNormalAndCoplanarPoint(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this } setFromCoplanarPoints(t, e, n) { const r = Jr.subVectors(n, e).cross(eu.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(r, t), this } copy(t) { return this.normal.copy(t.normal), this.constant = t.constant, this } normalize() { const t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(t) { return this.normal.dot(t) + this.constant } distanceToSphere(t) { return this.distanceToPoint(t.center) - t.radius } projectPoint(t, e) { return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t)) } intersectLine(t, e) { const n = t.delta(Jr), r = this.normal.dot(n); if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null; const s = -(t.start.dot(this.normal) + this.constant) / r; return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s) } intersectsLine(t) { const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0 } intersectsBox(t) { return t.intersectsPlane(this) } intersectsSphere(t) { return t.intersectsPlane(this) } coplanarPoint(t) { return t.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(t, e) { const n = e || nu.getNormalMatrix(t), r = this.coplanarPoint(Jr).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize(); return this.constant = -r.dot(s), this } translate(t) { return this.constant -= t.dot(this.normal), this } equals(t) { return t.normal.equals(this.normal) && t.constant === this.constant } clone() { return new this.constructor().copy(this) } } const Mn = new bs, nr = new z; class As { constructor(t = new an, e = new an, n = new an, r = new an, s = new an, o = new an) { this.planes = [t, e, n, r, s, o] } set(t, e, n, r, s, o) { const a = this.planes; return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this } copy(t) { const e = this.planes; for (let n = 0; n < 6; n++)e[n].copy(t.planes[n]); return this } setFromProjectionMatrix(t, e = $e) { const n = this.planes, r = t.elements, s = r[0], o = r[1], a = r[2], c = r[3], l = r[4], u = r[5], f = r[6], d = r[7], g = r[8], _ = r[9], x = r[10], p = r[11], h = r[12], A = r[13], v = r[14], y = r[15]; if (n[0].setComponents(c - s, d - l, p - g, y - h).normalize(), n[1].setComponents(c + s, d + l, p + g, y + h).normalize(), n[2].setComponents(c + o, d + u, p + _, y + A).normalize(), n[3].setComponents(c - o, d - u, p - _, y - A).normalize(), n[4].setComponents(c - a, d - f, p - x, y - v).normalize(), e === $e) n[5].setComponents(c + a, d + f, p + x, y + v).normalize(); else if (e === gr) n[5].setComponents(a, f, x, v).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e); return this } intersectsObject(t) { if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld); else { const e = t.geometry; e.boundingSphere === null && e.computeBoundingSphere(), Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld) } return this.intersectsSphere(Mn) } intersectsSprite(t) { return Mn.center.set(0, 0, 0), Mn.radius = .7071067811865476, Mn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Mn) } intersectsSphere(t) { const e = this.planes, n = t.center, r = -t.radius; for (let s = 0; s < 6; s++)if (e[s].distanceToPoint(n) < r) return !1; return !0 } intersectsBox(t) { const e = this.planes; for (let n = 0; n < 6; n++) { const r = e[n]; if (nr.x = r.normal.x > 0 ? t.max.x : t.min.x, nr.y = r.normal.y > 0 ? t.max.y : t.min.y, nr.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(nr) < 0) return !1 } return !0 } containsPoint(t) { const e = this.planes; for (let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function Xo() { let i = null, t = !1, e = null, n = null; function r(s, o) { e(s, o), n = i.requestAnimationFrame(r) } return { start: function () { t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0) }, stop: function () { i.cancelAnimationFrame(n), t = !1 }, setAnimationLoop: function (s) { e = s }, setContext: function (s) { i = s } } } function iu(i, t) { const e = t.isWebGL2, n = new WeakMap; function r(l, u) { const f = l.array, d = l.usage, g = f.byteLength, _ = i.createBuffer(); i.bindBuffer(u, _), i.bufferData(u, f, d), l.onUploadCallback(); let x; if (f instanceof Float32Array) x = i.FLOAT; else if (f instanceof Uint16Array) if (l.isFloat16BufferAttribute) if (e) x = i.HALF_FLOAT; else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."); else x = i.UNSIGNED_SHORT; else if (f instanceof Int16Array) x = i.SHORT; else if (f instanceof Uint32Array) x = i.UNSIGNED_INT; else if (f instanceof Int32Array) x = i.INT; else if (f instanceof Int8Array) x = i.BYTE; else if (f instanceof Uint8Array) x = i.UNSIGNED_BYTE; else if (f instanceof Uint8ClampedArray) x = i.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f); return { buffer: _, type: x, bytesPerElement: f.BYTES_PER_ELEMENT, version: l.version, size: g } } function s(l, u, f) { const d = u.array, g = u._updateRange, _ = u.updateRanges; if (i.bindBuffer(f, l), g.count === -1 && _.length === 0 && i.bufferSubData(f, 0, d), _.length !== 0) { for (let x = 0, p = _.length; x < p; x++) { const h = _[x]; e ? i.bufferSubData(f, h.start * d.BYTES_PER_ELEMENT, d, h.start, h.count) : i.bufferSubData(f, h.start * d.BYTES_PER_ELEMENT, d.subarray(h.start, h.start + h.count)) } u.clearUpdateRanges() } g.count !== -1 && (e ? i.bufferSubData(f, g.offset * d.BYTES_PER_ELEMENT, d, g.offset, g.count) : i.bufferSubData(f, g.offset * d.BYTES_PER_ELEMENT, d.subarray(g.offset, g.offset + g.count)), g.count = -1), u.onUploadCallback() } function o(l) { return l.isInterleavedBufferAttribute && (l = l.data), n.get(l) } function a(l) { l.isInterleavedBufferAttribute && (l = l.data); const u = n.get(l); u && (i.deleteBuffer(u.buffer), n.delete(l)) } function c(l, u) { if (l.isGLBufferAttribute) { const d = n.get(l); (!d || d.version < l.version) && n.set(l, { buffer: l.buffer, type: l.type, bytesPerElement: l.elementSize, version: l.version }); return } l.isInterleavedBufferAttribute && (l = l.data); const f = n.get(l); if (f === void 0) n.set(l, r(l, u)); else if (f.version < l.version) { if (f.size !== l.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); s(f.buffer, l, u), f.version = l.version } } return { get: o, remove: a, update: c } } class Ui extends dn { constructor(t = 1, e = 1, n = 1, r = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: r }; const s = t / 2, o = e / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, u = c + 1, f = t / a, d = e / c, g = [], _ = [], x = [], p = []; for (let h = 0; h < u; h++) { const A = h * d - o; for (let v = 0; v < l; v++) { const y = v * f - s; _.push(y, -A, 0), x.push(0, 0, 1), p.push(v / a), p.push(1 - h / c) } } for (let h = 0; h < c; h++)for (let A = 0; A < a; A++) { const v = A + l * h, y = A + l * (h + 1), U = A + 1 + l * (h + 1), P = A + 1 + l * h; g.push(v, y, P), g.push(y, U, P) } this.setIndex(g), this.setAttribute("position", new Ve(_, 3)), this.setAttribute("normal", new Ve(x, 3)), this.setAttribute("uv", new Ve(p, 2)) } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new Ui(t.width, t.height, t.widthSegments, t.heightSegments) } } var ru = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, su = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, au = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ou = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, lu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, uu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, hu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, fu = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, du = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, pu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, mu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, gu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, _u = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, xu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, vu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Mu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Su = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, yu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Eu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Tu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, bu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Au = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, wu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Ru = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Cu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Pu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Lu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Du = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Uu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Iu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Nu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Ou = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Fu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Bu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, zu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Hu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Gu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Vu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ku = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Wu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Xu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, qu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Yu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ju = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Zu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ku = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Ju = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, $u = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Qu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, th = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, eh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, nh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ih = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, rh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, sh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ah = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, oh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ch = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, lh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, uh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, hh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, fh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, dh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ph = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, mh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, gh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, _h = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, xh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, vh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Mh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Sh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, yh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Eh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Th = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, bh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ah = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, wh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Rh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ch = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Ph = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Lh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Dh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Uh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ih = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Nh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Oh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Fh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Bh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, zh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Hh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Gh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Vh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, kh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Wh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Xh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, qh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Yh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, jh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Zh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Kh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Jh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, $h = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Qh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, tf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, nf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const rf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, sf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, af = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, of = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, hf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, ff = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, df = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, pf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, mf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, _f = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, xf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, vf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ef = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, bf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Af = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Cf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Lf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Df = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Uf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, If = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Of = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ff = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, zt = { alphahash_fragment: ru, alphahash_pars_fragment: su, alphamap_fragment: au, alphamap_pars_fragment: ou, alphatest_fragment: cu, alphatest_pars_fragment: lu, aomap_fragment: uu, aomap_pars_fragment: hu, batching_pars_vertex: fu, batching_vertex: du, begin_vertex: pu, beginnormal_vertex: mu, bsdfs: gu, iridescence_fragment: _u, bumpmap_pars_fragment: xu, clipping_planes_fragment: vu, clipping_planes_pars_fragment: Mu, clipping_planes_pars_vertex: Su, clipping_planes_vertex: yu, color_fragment: Eu, color_pars_fragment: Tu, color_pars_vertex: bu, color_vertex: Au, common: wu, cube_uv_reflection_fragment: Ru, defaultnormal_vertex: Cu, displacementmap_pars_vertex: Pu, displacementmap_vertex: Lu, emissivemap_fragment: Du, emissivemap_pars_fragment: Uu, colorspace_fragment: Iu, colorspace_pars_fragment: Nu, envmap_fragment: Ou, envmap_common_pars_fragment: Fu, envmap_pars_fragment: Bu, envmap_pars_vertex: zu, envmap_physical_pars_fragment: Ju, envmap_vertex: Hu, fog_vertex: Gu, fog_pars_vertex: Vu, fog_fragment: ku, fog_pars_fragment: Wu, gradientmap_pars_fragment: Xu, lightmap_fragment: qu, lightmap_pars_fragment: Yu, lights_lambert_fragment: ju, lights_lambert_pars_fragment: Zu, lights_pars_begin: Ku, lights_toon_fragment: $u, lights_toon_pars_fragment: Qu, lights_phong_fragment: th, lights_phong_pars_fragment: eh, lights_physical_fragment: nh, lights_physical_pars_fragment: ih, lights_fragment_begin: rh, lights_fragment_maps: sh, lights_fragment_end: ah, logdepthbuf_fragment: oh, logdepthbuf_pars_fragment: ch, logdepthbuf_pars_vertex: lh, logdepthbuf_vertex: uh, map_fragment: hh, map_pars_fragment: fh, map_particle_fragment: dh, map_particle_pars_fragment: ph, metalnessmap_fragment: mh, metalnessmap_pars_fragment: gh, morphcolor_vertex: _h, morphnormal_vertex: xh, morphtarget_pars_vertex: vh, morphtarget_vertex: Mh, normal_fragment_begin: Sh, normal_fragment_maps: yh, normal_pars_fragment: Eh, normal_pars_vertex: Th, normal_vertex: bh, normalmap_pars_fragment: Ah, clearcoat_normal_fragment_begin: wh, clearcoat_normal_fragment_maps: Rh, clearcoat_pars_fragment: Ch, iridescence_pars_fragment: Ph, opaque_fragment: Lh, packing: Dh, premultiplied_alpha_fragment: Uh, project_vertex: Ih, dithering_fragment: Nh, dithering_pars_fragment: Oh, roughnessmap_fragment: Fh, roughnessmap_pars_fragment: Bh, shadowmap_pars_fragment: zh, shadowmap_pars_vertex: Hh, shadowmap_vertex: Gh, shadowmask_pars_fragment: Vh, skinbase_vertex: kh, skinning_pars_vertex: Wh, skinning_vertex: Xh, skinnormal_vertex: qh, specularmap_fragment: Yh, specularmap_pars_fragment: jh, tonemapping_fragment: Zh, tonemapping_pars_fragment: Kh, transmission_fragment: Jh, transmission_pars_fragment: $h, uv_pars_fragment: Qh, uv_pars_vertex: tf, uv_vertex: ef, worldpos_vertex: nf, background_vert: rf, background_frag: sf, backgroundCube_vert: af, backgroundCube_frag: of, cube_vert: cf, cube_frag: lf, depth_vert: uf, depth_frag: hf, distanceRGBA_vert: ff, distanceRGBA_frag: df, equirect_vert: pf, equirect_frag: mf, linedashed_vert: gf, linedashed_frag: _f, meshbasic_vert: xf, meshbasic_frag: vf, meshlambert_vert: Mf, meshlambert_frag: Sf, meshmatcap_vert: yf, meshmatcap_frag: Ef, meshnormal_vert: Tf, meshnormal_frag: bf, meshphong_vert: Af, meshphong_frag: wf, meshphysical_vert: Rf, meshphysical_frag: Cf, meshtoon_vert: Pf, meshtoon_frag: Lf, points_vert: Df, points_frag: Uf, shadow_vert: If, shadow_frag: Nf, sprite_vert: Of, sprite_frag: Ff }, Et = { common: { diffuse: { value: new Yt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ot }, alphaMap: { value: null }, alphaMapTransform: { value: new Ot }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ot } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ot } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ot } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ot }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ot }, normalScale: { value: new dt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ot }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ot } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ot } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ot } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Yt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Yt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ot }, alphaTest: { value: 0 }, uvTransform: { value: new Ot } }, sprite: { diffuse: { value: new Yt(16777215) }, opacity: { value: 1 }, center: { value: new dt(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ot }, alphaMap: { value: null }, alphaMapTransform: { value: new Ot }, alphaTest: { value: 0 } } }, ze = { basic: { uniforms: ve([Et.common, Et.specularmap, Et.envmap, Et.aomap, Et.lightmap, Et.fog]), vertexShader: zt.meshbasic_vert, fragmentShader: zt.meshbasic_frag }, lambert: { uniforms: ve([Et.common, Et.specularmap, Et.envmap, Et.aomap, Et.lightmap, Et.emissivemap, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.fog, Et.lights, { emissive: { value: new Yt(0) } }]), vertexShader: zt.meshlambert_vert, fragmentShader: zt.meshlambert_frag }, phong: { uniforms: ve([Et.common, Et.specularmap, Et.envmap, Et.aomap, Et.lightmap, Et.emissivemap, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.fog, Et.lights, { emissive: { value: new Yt(0) }, specular: { value: new Yt(1118481) }, shininess: { value: 30 } }]), vertexShader: zt.meshphong_vert, fragmentShader: zt.meshphong_frag }, standard: { uniforms: ve([Et.common, Et.envmap, Et.aomap, Et.lightmap, Et.emissivemap, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.roughnessmap, Et.metalnessmap, Et.fog, Et.lights, { emissive: { value: new Yt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: zt.meshphysical_vert, fragmentShader: zt.meshphysical_frag }, toon: { uniforms: ve([Et.common, Et.aomap, Et.lightmap, Et.emissivemap, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.gradientmap, Et.fog, Et.lights, { emissive: { value: new Yt(0) } }]), vertexShader: zt.meshtoon_vert, fragmentShader: zt.meshtoon_frag }, matcap: { uniforms: ve([Et.common, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.fog, { matcap: { value: null } }]), vertexShader: zt.meshmatcap_vert, fragmentShader: zt.meshmatcap_frag }, points: { uniforms: ve([Et.points, Et.fog]), vertexShader: zt.points_vert, fragmentShader: zt.points_frag }, dashed: { uniforms: ve([Et.common, Et.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: zt.linedashed_vert, fragmentShader: zt.linedashed_frag }, depth: { uniforms: ve([Et.common, Et.displacementmap]), vertexShader: zt.depth_vert, fragmentShader: zt.depth_frag }, normal: { uniforms: ve([Et.common, Et.bumpmap, Et.normalmap, Et.displacementmap, { opacity: { value: 1 } }]), vertexShader: zt.meshnormal_vert, fragmentShader: zt.meshnormal_frag }, sprite: { uniforms: ve([Et.sprite, Et.fog]), vertexShader: zt.sprite_vert, fragmentShader: zt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ot }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: zt.background_vert, fragmentShader: zt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: zt.backgroundCube_vert, fragmentShader: zt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: zt.cube_vert, fragmentShader: zt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: zt.equirect_vert, fragmentShader: zt.equirect_frag }, distanceRGBA: { uniforms: ve([Et.common, Et.displacementmap, { referencePosition: { value: new z }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: zt.distanceRGBA_vert, fragmentShader: zt.distanceRGBA_frag }, shadow: { uniforms: ve([Et.lights, Et.fog, { color: { value: new Yt(0) }, opacity: { value: 1 } }]), vertexShader: zt.shadow_vert, fragmentShader: zt.shadow_frag } }; ze.physical = { uniforms: ve([ze.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ot }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ot }, clearcoatNormalScale: { value: new dt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ot }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ot }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ot }, sheen: { value: 0 }, sheenColor: { value: new Yt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ot }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ot }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ot }, transmissionSamplerSize: { value: new dt }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ot }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Yt(0) }, specularColor: { value: new Yt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ot }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ot }, anisotropyVector: { value: new dt }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ot } }]), vertexShader: zt.meshphysical_vert, fragmentShader: zt.meshphysical_frag }; const ir = { r: 0, b: 0, g: 0 }; function Bf(i, t, e, n, r, s, o) { const a = new Yt(0); let c = s === !0 ? 0 : 1, l, u, f = null, d = 0, g = null; function _(p, h) { let A = !1, v = h.isScene === !0 ? h.background : null; v && v.isTexture && (v = (h.backgroundBlurriness > 0 ? e : t).get(v)), v === null ? x(a, c) : v && v.isColor && (x(v, 1), A = !0); const y = i.xr.getEnvironmentBlendMode(); y === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : y === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || A) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), v && (v.isCubeTexture || v.mapping === vr) ? (u === void 0 && (u = new He(new Di(1, 1, 1), new Pn({ name: "BackgroundCubeMaterial", uniforms: fi(ze.backgroundCube.uniforms), vertexShader: ze.backgroundCube.vertexShader, fragmentShader: ze.backgroundCube.fragmentShader, side: Ee, depthTest: !1, depthWrite: !1, fog: !1 })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function (U, P, R) { this.matrixWorld.copyPosition(R.matrixWorld) }, Object.defineProperty(u.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), r.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = Zt.getTransfer(v.colorSpace) !== Jt, (f !== v || d !== v.version || g !== i.toneMapping) && (u.material.needsUpdate = !0, f = v, d = v.version, g = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new He(new Ui(2, 2), new Pn({ name: "BackgroundMaterial", uniforms: fi(ze.background.uniforms), vertexShader: ze.background.vertexShader, fragmentShader: ze.background.fragmentShader, side: fn, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value } }), r.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, l.material.toneMapped = Zt.getTransfer(v.colorSpace) !== Jt, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (f !== v || d !== v.version || g !== i.toneMapping) && (l.material.needsUpdate = !0, f = v, d = v.version, g = i.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null)) } function x(p, h) { p.getRGB(ir, Vo(i)), n.buffers.color.setClear(ir.r, ir.g, ir.b, h, o) } return { getClearColor: function () { return a }, setClearColor: function (p, h = 1) { a.set(p), c = h, x(a, c) }, getClearAlpha: function () { return c }, setClearAlpha: function (p) { c = p, x(a, c) }, render: _ } } function zf(i, t, e, n) { const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : t.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = p(null); let l = c, u = !1; function f(N, W, Z, j, B) { let it = !1; if (o) { const nt = x(j, Z, W); l !== nt && (l = nt, g(l.object)), it = h(N, j, Z, B), it && A(N, j, Z, B) } else { const nt = W.wireframe === !0; (l.geometry !== j.id || l.program !== Z.id || l.wireframe !== nt) && (l.geometry = j.id, l.program = Z.id, l.wireframe = nt, it = !0) } B !== null && e.update(B, i.ELEMENT_ARRAY_BUFFER), (it || u) && (u = !1, q(N, W, Z, j), B !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(B).buffer)) } function d() { return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES() } function g(N) { return n.isWebGL2 ? i.bindVertexArray(N) : s.bindVertexArrayOES(N) } function _(N) { return n.isWebGL2 ? i.deleteVertexArray(N) : s.deleteVertexArrayOES(N) } function x(N, W, Z) { const j = Z.wireframe === !0; let B = a[N.id]; B === void 0 && (B = {}, a[N.id] = B); let it = B[W.id]; it === void 0 && (it = {}, B[W.id] = it); let nt = it[j]; return nt === void 0 && (nt = p(d()), it[j] = nt), nt } function p(N) { const W = [], Z = [], j = []; for (let B = 0; B < r; B++)W[B] = 0, Z[B] = 0, j[B] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: W, enabledAttributes: Z, attributeDivisors: j, object: N, attributes: {}, index: null } } function h(N, W, Z, j) { const B = l.attributes, it = W.attributes; let nt = 0; const pt = Z.getAttributes(); for (const mt in pt) if (pt[mt].location >= 0) { const D = B[mt]; let C = it[mt]; if (C === void 0 && (mt === "instanceMatrix" && N.instanceMatrix && (C = N.instanceMatrix), mt === "instanceColor" && N.instanceColor && (C = N.instanceColor)), D === void 0 || D.attribute !== C || C && D.data !== C.data) return !0; nt++ } return l.attributesNum !== nt || l.index !== j } function A(N, W, Z, j) { const B = {}, it = W.attributes; let nt = 0; const pt = Z.getAttributes(); for (const mt in pt) if (pt[mt].location >= 0) { let D = it[mt]; D === void 0 && (mt === "instanceMatrix" && N.instanceMatrix && (D = N.instanceMatrix), mt === "instanceColor" && N.instanceColor && (D = N.instanceColor)); const C = {}; C.attribute = D, D && D.data && (C.data = D.data), B[mt] = C, nt++ } l.attributes = B, l.attributesNum = nt, l.index = j } function v() { const N = l.newAttributes; for (let W = 0, Z = N.length; W < Z; W++)N[W] = 0 } function y(N) { U(N, 0) } function U(N, W) { const Z = l.newAttributes, j = l.enabledAttributes, B = l.attributeDivisors; Z[N] = 1, j[N] === 0 && (i.enableVertexAttribArray(N), j[N] = 1), B[N] !== W && ((n.isWebGL2 ? i : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, W), B[N] = W) } function P() { const N = l.newAttributes, W = l.enabledAttributes; for (let Z = 0, j = W.length; Z < j; Z++)W[Z] !== N[Z] && (i.disableVertexAttribArray(Z), W[Z] = 0) } function R(N, W, Z, j, B, it, nt) { nt === !0 ? i.vertexAttribIPointer(N, W, Z, B, it) : i.vertexAttribPointer(N, W, Z, j, B, it) } function q(N, W, Z, j) { if (n.isWebGL2 === !1 && (N.isInstancedMesh || j.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null) return; v(); const B = j.attributes, it = Z.getAttributes(), nt = W.defaultAttributeValues; for (const pt in it) { const mt = it[pt]; if (mt.location >= 0) { let tt = B[pt]; if (tt === void 0 && (pt === "instanceMatrix" && N.instanceMatrix && (tt = N.instanceMatrix), pt === "instanceColor" && N.instanceColor && (tt = N.instanceColor)), tt !== void 0) { const D = tt.normalized, C = tt.itemSize, b = e.get(tt); if (b === void 0) continue; const E = b.buffer, Y = b.type, rt = b.bytesPerElement, G = n.isWebGL2 === !0 && (Y === i.INT || Y === i.UNSIGNED_INT || tt.gpuType === yo); if (tt.isInterleavedBufferAttribute) { const ot = tt.data, I = ot.stride, yt = tt.offset; if (ot.isInstancedInterleavedBuffer) { for (let X = 0; X < mt.locationSize; X++)U(mt.location + X, ot.meshPerAttribute); N.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = ot.meshPerAttribute * ot.count) } else for (let X = 0; X < mt.locationSize; X++)y(mt.location + X); i.bindBuffer(i.ARRAY_BUFFER, E); for (let X = 0; X < mt.locationSize; X++)R(mt.location + X, C / mt.locationSize, Y, D, I * rt, (yt + C / mt.locationSize * X) * rt, G) } else { if (tt.isInstancedBufferAttribute) { for (let ot = 0; ot < mt.locationSize; ot++)U(mt.location + ot, tt.meshPerAttribute); N.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = tt.meshPerAttribute * tt.count) } else for (let ot = 0; ot < mt.locationSize; ot++)y(mt.location + ot); i.bindBuffer(i.ARRAY_BUFFER, E); for (let ot = 0; ot < mt.locationSize; ot++)R(mt.location + ot, C / mt.locationSize, Y, D, C * rt, C / mt.locationSize * ot * rt, G) } } else if (nt !== void 0) { const D = nt[pt]; if (D !== void 0) switch (D.length) { case 2: i.vertexAttrib2fv(mt.location, D); break; case 3: i.vertexAttrib3fv(mt.location, D); break; case 4: i.vertexAttrib4fv(mt.location, D); break; default: i.vertexAttrib1fv(mt.location, D) } } } } P() } function S() { k(); for (const N in a) { const W = a[N]; for (const Z in W) { const j = W[Z]; for (const B in j) _(j[B].object), delete j[B]; delete W[Z] } delete a[N] } } function w(N) { if (a[N.id] === void 0) return; const W = a[N.id]; for (const Z in W) { const j = W[Z]; for (const B in j) _(j[B].object), delete j[B]; delete W[Z] } delete a[N.id] } function J(N) { for (const W in a) { const Z = a[W]; if (Z[N.id] === void 0) continue; const j = Z[N.id]; for (const B in j) _(j[B].object), delete j[B]; delete Z[N.id] } } function k() { ut(), u = !0, l !== c && (l = c, g(l.object)) } function ut() { c.geometry = null, c.program = null, c.wireframe = !1 } return { setup: f, reset: k, resetDefaultState: ut, dispose: S, releaseStatesOfGeometry: w, releaseStatesOfProgram: J, initAttributes: v, enableAttribute: y, disableUnusedAttributes: P } } function Hf(i, t, e, n) { const r = n.isWebGL2; let s; function o(u) { s = u } function a(u, f) { i.drawArrays(s, u, f), e.update(f, s, 1) } function c(u, f, d) { if (d === 0) return; let g, _; if (r) g = i, _ = "drawArraysInstanced"; else if (g = t.get("ANGLE_instanced_arrays"), _ = "drawArraysInstancedANGLE", g === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } g[_](s, u, f, d), e.update(f, s, d) } function l(u, f, d) { if (d === 0) return; const g = t.get("WEBGL_multi_draw"); if (g === null) for (let _ = 0; _ < d; _++)this.render(u[_], f[_]); else { g.multiDrawArraysWEBGL(s, u, 0, f, 0, d); let _ = 0; for (let x = 0; x < d; x++)_ += f[x]; e.update(_, s, 1) } } this.setMode = o, this.render = a, this.renderInstances = c, this.renderMultiDraw = l } function Gf(i, t, e) { let n; function r() { if (n !== void 0) return n; if (t.has("EXT_texture_filter_anisotropic") === !0) { const R = t.get("EXT_texture_filter_anisotropic"); n = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n } function s(R) { if (R === "highp") { if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp"; R = "mediump" } return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext"; let a = e.precision !== void 0 ? e.precision : "highp"; const c = s(a); c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c); const l = o || t.has("WEBGL_draw_buffers"), u = e.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), x = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, y = o || t.has("OES_texture_float"), U = v && y, P = o ? i.getParameter(i.MAX_SAMPLES) : 0; return { isWebGL2: o, drawBuffers: l, getMaxAnisotropy: r, getMaxPrecision: s, precision: a, logarithmicDepthBuffer: u, maxTextures: f, maxVertexTextures: d, maxTextureSize: g, maxCubemapSize: _, maxAttributes: x, maxVertexUniforms: p, maxVaryings: h, maxFragmentUniforms: A, vertexTextures: v, floatFragmentTextures: y, floatVertexTextures: U, maxSamples: P } } function Vf(i) { const t = this; let e = null, n = 0, r = !1, s = !1; const o = new an, a = new Ot, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (f, d) { const g = f.length !== 0 || d || n !== 0 || r; return r = d, n = f.length, g }, this.beginShadows = function () { s = !0, u(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (f, d) { e = u(f, d, 0) }, this.setState = function (f, d, g) { const _ = f.clippingPlanes, x = f.clipIntersection, p = f.clipShadows, h = i.get(f); if (!r || _ === null || _.length === 0 || s && !p) s ? u(null) : l(); else { const A = s ? 0 : n, v = A * 4; let y = h.clippingState || null; c.value = y, y = u(_, d, v, g); for (let U = 0; U !== v; ++U)y[U] = e[U]; h.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A } }; function l() { c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0 } function u(f, d, g, _) { const x = f !== null ? f.length : 0; let p = null; if (x !== 0) { if (p = c.value, _ !== !0 || p === null) { const h = g + x * 4, A = d.matrixWorldInverse; a.getNormalMatrix(A), (p === null || p.length < h) && (p = new Float32Array(h)); for (let v = 0, y = g; v !== x; ++v, y += 4)o.copy(f[v]).applyMatrix4(A, a), o.normal.toArray(p, y), p[y + 3] = o.constant } c.value = p, c.needsUpdate = !0 } return t.numPlanes = x, t.numIntersection = 0, p } } function kf(i) { let t = new WeakMap; function e(o, a) { return a === fs ? o.mapping = oi : a === ds && (o.mapping = ci), o } function n(o) { if (o && o.isTexture) { const a = o.mapping; if (a === fs || a === ds) if (t.has(o)) { const c = t.get(o).texture; return e(c, o.mapping) } else { const c = o.image; if (c && c.height > 0) { const l = new tu(c.height / 2); return l.fromEquirectangularTexture(i, o), t.set(o, l), o.addEventListener("dispose", r), e(l.texture, o.mapping) } else return null } } return o } function r(o) { const a = o.target; a.removeEventListener("dispose", r); const c = t.get(a); c !== void 0 && (t.delete(a), c.dispose()) } function s() { t = new WeakMap } return { get: n, dispose: s } } class qo extends ko { constructor(t = -1, e = 1, n = 1, r = -1, s = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix() } copy(t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this } setViewOffset(t, e, n, r, s, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2; let s = n - t, o = n + t, a = r + e, c = r - e; if (this.view !== null && this.view.enabled) { const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += l * this.view.offsetX, o = s + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height } this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(t) { const e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e } } const ti = 4, Fa = [.125, .215, .35, .446, .526, .582], Tn = 20, $r = new qo, Ba = new Yt; let Qr = null, ts = 0, es = 0; const yn = (1 + Math.sqrt(5)) / 2, Jn = 1 / yn, za = [new z(1, 1, 1), new z(-1, 1, 1), new z(1, 1, -1), new z(-1, 1, -1), new z(0, yn, Jn), new z(0, yn, -Jn), new z(Jn, 0, yn), new z(-Jn, 0, yn), new z(yn, Jn, 0), new z(-yn, Jn, 0)]; class Ha { constructor(t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(t, e = 0, n = .1, r = 100) { Qr = this._renderer.getRenderTarget(), ts = this._renderer.getActiveCubeFace(), es = this._renderer.getActiveMipmapLevel(), this._setSize(256); const s = this._allocateTargets(); return s.depthBuffer = !0, this._sceneToCubeUV(t, n, r, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s } fromEquirectangular(t, e = null) { return this._fromTexture(t, e) } fromCubemap(t, e = null) { return this._fromTexture(t, e) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = ka(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = Va(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose() } _cleanup(t) { this._renderer.setRenderTarget(Qr, ts, es), t.scissorTest = !1, rr(t, 0, 0, t.width, t.height) } _fromTexture(t, e) { t.mapping === oi || t.mapping === ci ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Qr = this._renderer.getRenderTarget(), ts = this._renderer.getActiveCubeFace(), es = this._renderer.getActiveMipmapLevel(); const n = e || this._allocateTargets(); return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ye, minFilter: ye, generateMipmaps: !1, type: bi, format: Fe, colorSpace: Qe, depthBuffer: !1 }, r = Ga(t, e, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ga(t, e, n); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Wf(s)), this._blurMaterial = Xf(s, t, e) } return r } _compileMaterial(t) { const e = new He(this._lodPlanes[0], t); this._renderer.compile(e, $r) } _sceneToCubeUV(t, e, n, r) { const a = new we(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping; u.getClearColor(Ba), u.toneMapping = un, u.autoClear = !1; const g = new zo({ name: "PMREM.Background", side: Ee, depthWrite: !1, depthTest: !1 }), _ = new He(new Di, g); let x = !1; const p = t.background; p ? p.isColor && (g.color.copy(p), t.background = null, x = !0) : (g.color.copy(Ba), x = !0); for (let h = 0; h < 6; h++) { const A = h % 3; A === 0 ? (a.up.set(0, c[h], 0), a.lookAt(l[h], 0, 0)) : A === 1 ? (a.up.set(0, 0, c[h]), a.lookAt(0, l[h], 0)) : (a.up.set(0, c[h], 0), a.lookAt(0, 0, l[h])); const v = this._cubeSize; rr(r, A * v, h > 2 ? v : 0, v, v), u.setRenderTarget(r), x && u.render(_, a), u.render(t, a) } _.geometry.dispose(), _.material.dispose(), u.toneMapping = d, u.autoClear = f, t.background = p } _textureToCubeUV(t, e) { const n = this._renderer, r = t.mapping === oi || t.mapping === ci; r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ka()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Va()); const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new He(this._lodPlanes[0], s), a = s.uniforms; a.envMap.value = t; const c = this._cubeSize; rr(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(o, $r) } _applyPMREM(t) { const e = this._renderer, n = e.autoClear; e.autoClear = !1; for (let r = 1; r < this._lodPlanes.length; r++) { const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = za[(r - 1) % za.length]; this._blur(t, r - 1, r, s, o) } e.autoClear = n } _blur(t, e, n, r, s) { const o = this._pingPongRenderTarget; this._halfBlur(t, o, e, n, r, "latitudinal", s), this._halfBlur(o, t, n, n, r, "longitudinal", s) } _halfBlur(t, e, n, r, s, o, a) { const c = this._renderer, l = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const u = 3, f = new He(this._lodPlanes[r], l), d = l.uniforms, g = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * Tn - 1), x = s / _, p = isFinite(s) ? 1 + Math.floor(u * x) : Tn; p > Tn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tn}`); const h = []; let A = 0; for (let R = 0; R < Tn; ++R) { const q = R / x, S = Math.exp(-q * q / 2); h.push(S), R === 0 ? A += S : R < p && (A += 2 * S) } for (let R = 0; R < h.length; R++)h[R] = h[R] / A; d.envMap.value = t.texture, d.samples.value = p, d.weights.value = h, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a); const { _lodMax: v } = this; d.dTheta.value = _, d.mipInt.value = v - n; const y = this._sizeLods[r], U = 3 * y * (r > v - ti ? r - v + ti : 0), P = 4 * (this._cubeSize - y); rr(e, U, P, 3 * y, 2 * y), c.setRenderTarget(e), c.render(f, $r) } } function Wf(i) { const t = [], e = [], n = []; let r = i; const s = i - ti + 1 + Fa.length; for (let o = 0; o < s; o++) { const a = Math.pow(2, r); e.push(a); let c = 1 / a; o > i - ti ? c = Fa[o - i + ti - 1] : o === 0 && (c = 0), n.push(c); const l = 1 / (a - 2), u = -l, f = 1 + l, d = [u, u, f, u, f, f, u, u, f, f, u, f], g = 6, _ = 6, x = 3, p = 2, h = 1, A = new Float32Array(x * _ * g), v = new Float32Array(p * _ * g), y = new Float32Array(h * _ * g); for (let P = 0; P < g; P++) { const R = P % 3 * 2 / 3 - 1, q = P > 2 ? 0 : -1, S = [R, q, 0, R + 2 / 3, q, 0, R + 2 / 3, q + 1, 0, R, q, 0, R + 2 / 3, q + 1, 0, R, q + 1, 0]; A.set(S, x * _ * P), v.set(d, p * _ * P); const w = [P, P, P, P, P, P]; y.set(w, h * _ * P) } const U = new dn; U.setAttribute("position", new Ge(A, x)), U.setAttribute("uv", new Ge(v, p)), U.setAttribute("faceIndex", new Ge(y, h)), t.push(U), r > ti && r-- } return { lodPlanes: t, sizeLods: e, sigmas: n } } function Ga(i, t, e) { const n = new Rn(i, t, e); return n.texture.mapping = vr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function rr(i, t, e, n, r) { i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r) } function Xf(i, t, e) {
	const n = new Float32Array(Tn), r = new z(0, 1, 0); return new Pn({
		name: "SphericalGaussianBlur", defines: { n: Tn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ws(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: ln, depthTest: !1, depthWrite: !1
	})
} function Va() {
	return new Pn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ws(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: ln, depthTest: !1, depthWrite: !1
	})
} function ka() {
	return new Pn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ws(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ln, depthTest: !1, depthWrite: !1
	})
} function ws() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function qf(i) { let t = new WeakMap, e = null; function n(a) { if (a && a.isTexture) { const c = a.mapping, l = c === fs || c === ds, u = c === oi || c === ci; if (l || u) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let f = t.get(a); return e === null && (e = new Ha(i)), f = l ? e.fromEquirectangular(a, f) : e.fromCubemap(a, f), t.set(a, f), f.texture } else { if (t.has(a)) return t.get(a).texture; { const f = a.image; if (l && f && f.height > 0 || u && f && r(f)) { e === null && (e = new Ha(i)); const d = l ? e.fromEquirectangular(a) : e.fromCubemap(a); return t.set(a, d), a.addEventListener("dispose", s), d.texture } else return null } } } return a } function r(a) { let c = 0; const l = 6; for (let u = 0; u < l; u++)a[u] !== void 0 && c++; return c === l } function s(a) { const c = a.target; c.removeEventListener("dispose", s); const l = t.get(c); l !== void 0 && (t.delete(c), l.dispose()) } function o() { t = new WeakMap, e !== null && (e.dispose(), e = null) } return { get: n, dispose: o } } function Yf(i) { const t = {}; function e(n) { if (t[n] !== void 0) return t[n]; let r; switch (n) { case "WEBGL_depth_texture": r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: r = i.getExtension(n) }return t[n] = r, r } return { has: function (n) { return e(n) !== null }, init: function (n) { n.isWebGL2 ? (e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance")) : (e("WEBGL_depth_texture"), e("OES_texture_float"), e("OES_texture_half_float"), e("OES_texture_half_float_linear"), e("OES_standard_derivatives"), e("OES_element_index_uint"), e("OES_vertex_array_object"), e("ANGLE_instanced_arrays")), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture") }, get: function (n) { const r = e(n); return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r } } } function jf(i, t, e, n) { const r = {}, s = new WeakMap; function o(f) { const d = f.target; d.index !== null && t.remove(d.index); for (const _ in d.attributes) t.remove(d.attributes[_]); for (const _ in d.morphAttributes) { const x = d.morphAttributes[_]; for (let p = 0, h = x.length; p < h; p++)t.remove(x[p]) } d.removeEventListener("dispose", o), delete r[d.id]; const g = s.get(d); g && (t.remove(g), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries-- } function a(f, d) { return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, e.memory.geometries++), d } function c(f) { const d = f.attributes; for (const _ in d) t.update(d[_], i.ARRAY_BUFFER); const g = f.morphAttributes; for (const _ in g) { const x = g[_]; for (let p = 0, h = x.length; p < h; p++)t.update(x[p], i.ARRAY_BUFFER) } } function l(f) { const d = [], g = f.index, _ = f.attributes.position; let x = 0; if (g !== null) { const A = g.array; x = g.version; for (let v = 0, y = A.length; v < y; v += 3) { const U = A[v + 0], P = A[v + 1], R = A[v + 2]; d.push(U, P, P, R, R, U) } } else if (_ !== void 0) { const A = _.array; x = _.version; for (let v = 0, y = A.length / 3 - 1; v < y; v += 3) { const U = v + 0, P = v + 1, R = v + 2; d.push(U, P, P, R, R, U) } } else return; const p = new (Do(d) ? Go : Ho)(d, 1); p.version = x; const h = s.get(f); h && t.remove(h), s.set(f, p) } function u(f) { const d = s.get(f); if (d) { const g = f.index; g !== null && d.version < g.version && l(f) } else l(f); return s.get(f) } return { get: a, update: c, getWireframeAttribute: u } } function Zf(i, t, e, n) { const r = n.isWebGL2; let s; function o(g) { s = g } let a, c; function l(g) { a = g.type, c = g.bytesPerElement } function u(g, _) { i.drawElements(s, _, a, g * c), e.update(_, s, 1) } function f(g, _, x) { if (x === 0) return; let p, h; if (r) p = i, h = "drawElementsInstanced"; else if (p = t.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", p === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } p[h](s, _, a, g * c, x), e.update(_, s, x) } function d(g, _, x) { if (x === 0) return; const p = t.get("WEBGL_multi_draw"); if (p === null) for (let h = 0; h < x; h++)this.render(g[h] / c, _[h]); else { p.multiDrawElementsWEBGL(s, _, 0, a, g, 0, x); let h = 0; for (let A = 0; A < x; A++)h += _[A]; e.update(h, s, 1) } } this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = f, this.renderMultiDraw = d } function Kf(i) { const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(s, o, a) { switch (e.calls++, o) { case i.TRIANGLES: e.triangles += a * (s / 3); break; case i.LINES: e.lines += a * (s / 2); break; case i.LINE_STRIP: e.lines += a * (s - 1); break; case i.LINE_LOOP: e.lines += a * s; break; case i.POINTS: e.points += a * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function r() { e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0 } return { memory: t, render: e, programs: null, autoReset: !0, reset: r, update: n } } function Jf(i, t) { return i[0] - t[0] } function $f(i, t) { return Math.abs(t[1]) - Math.abs(i[1]) } function Qf(i, t, e) { const n = {}, r = new Float32Array(8), s = new WeakMap, o = new he, a = []; for (let l = 0; l < 8; l++)a[l] = [l, 0]; function c(l, u, f) { const d = l.morphTargetInfluences; if (t.isWebGL2 === !0) { const _ = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, x = _ !== void 0 ? _.length : 0; let p = s.get(u); if (p === void 0 || p.count !== x) { let W = function () { ut.dispose(), s.delete(u), u.removeEventListener("dispose", W) }; var g = W; p !== void 0 && p.texture.dispose(); const v = u.morphAttributes.position !== void 0, y = u.morphAttributes.normal !== void 0, U = u.morphAttributes.color !== void 0, P = u.morphAttributes.position || [], R = u.morphAttributes.normal || [], q = u.morphAttributes.color || []; let S = 0; v === !0 && (S = 1), y === !0 && (S = 2), U === !0 && (S = 3); let w = u.attributes.position.count * S, J = 1; w > t.maxTextureSize && (J = Math.ceil(w / t.maxTextureSize), w = t.maxTextureSize); const k = new Float32Array(w * J * 4 * x), ut = new No(k, w, J, x); ut.type = cn, ut.needsUpdate = !0; const N = S * 4; for (let Z = 0; Z < x; Z++) { const j = P[Z], B = R[Z], it = q[Z], nt = w * J * 4 * Z; for (let pt = 0; pt < j.count; pt++) { const mt = pt * N; v === !0 && (o.fromBufferAttribute(j, pt), k[nt + mt + 0] = o.x, k[nt + mt + 1] = o.y, k[nt + mt + 2] = o.z, k[nt + mt + 3] = 0), y === !0 && (o.fromBufferAttribute(B, pt), k[nt + mt + 4] = o.x, k[nt + mt + 5] = o.y, k[nt + mt + 6] = o.z, k[nt + mt + 7] = 0), U === !0 && (o.fromBufferAttribute(it, pt), k[nt + mt + 8] = o.x, k[nt + mt + 9] = o.y, k[nt + mt + 10] = o.z, k[nt + mt + 11] = it.itemSize === 4 ? o.w : 1) } } p = { count: x, texture: ut, size: new dt(w, J) }, s.set(u, p), u.addEventListener("dispose", W) } let h = 0; for (let v = 0; v < d.length; v++)h += d[v]; const A = u.morphTargetsRelative ? 1 : 1 - h; f.getUniforms().setValue(i, "morphTargetBaseInfluence", A), f.getUniforms().setValue(i, "morphTargetInfluences", d), f.getUniforms().setValue(i, "morphTargetsTexture", p.texture, e), f.getUniforms().setValue(i, "morphTargetsTextureSize", p.size) } else { const _ = d === void 0 ? 0 : d.length; let x = n[u.id]; if (x === void 0 || x.length !== _) { x = []; for (let y = 0; y < _; y++)x[y] = [y, 0]; n[u.id] = x } for (let y = 0; y < _; y++) { const U = x[y]; U[0] = y, U[1] = d[y] } x.sort($f); for (let y = 0; y < 8; y++)y < _ && x[y][1] ? (a[y][0] = x[y][0], a[y][1] = x[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0); a.sort(Jf); const p = u.morphAttributes.position, h = u.morphAttributes.normal; let A = 0; for (let y = 0; y < 8; y++) { const U = a[y], P = U[0], R = U[1]; P !== Number.MAX_SAFE_INTEGER && R ? (p && u.getAttribute("morphTarget" + y) !== p[P] && u.setAttribute("morphTarget" + y, p[P]), h && u.getAttribute("morphNormal" + y) !== h[P] && u.setAttribute("morphNormal" + y, h[P]), r[y] = R, A += R) : (p && u.hasAttribute("morphTarget" + y) === !0 && u.deleteAttribute("morphTarget" + y), h && u.hasAttribute("morphNormal" + y) === !0 && u.deleteAttribute("morphNormal" + y), r[y] = 0) } const v = u.morphTargetsRelative ? 1 : 1 - A; f.getUniforms().setValue(i, "morphTargetBaseInfluence", v), f.getUniforms().setValue(i, "morphTargetInfluences", r) } } return { update: c } } function td(i, t, e, n) { let r = new WeakMap; function s(c) { const l = n.render.frame, u = c.geometry, f = t.get(c, u); if (r.get(f) !== l && (t.update(f), r.set(f, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), r.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) { const d = c.skeleton; r.get(d) !== l && (d.update(), r.set(d, l)) } return f } function o() { r = new WeakMap } function a(c) { const l = c.target; l.removeEventListener("dispose", a), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor) } return { update: s, dispose: o } } class Yo extends Se { constructor(t, e, n, r, s, o, a, c, l, u) { if (u = u !== void 0 ? u : An, u !== An && u !== ui) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && u === An && (n = on), n === void 0 && u === ui && (n = bn), super(null, r, s, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : Me, this.minFilter = c !== void 0 ? c : Me, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(t) { return super.copy(t), this.compareFunction = t.compareFunction, this } toJSON(t) { const e = super.toJSON(t); return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e } } const jo = new Se, Zo = new Yo(1, 1); Zo.compareFunction = Lo; const Ko = new No, Jo = new Fl, $o = new Wo, Wa = [], Xa = [], qa = new Float32Array(16), Ya = new Float32Array(9), ja = new Float32Array(4); function di(i, t, e) { const n = i[0]; if (n <= 0 || n > 0) return i; const r = t * e; let s = Wa[r]; if (s === void 0 && (s = new Float32Array(r), Wa[r] = s), t !== 0) { n.toArray(s, 0); for (let o = 1, a = 0; o !== t; ++o)a += e, i[o].toArray(s, a) } return s } function se(i, t) { if (i.length !== t.length) return !1; for (let e = 0, n = i.length; e < n; e++)if (i[e] !== t[e]) return !1; return !0 } function ae(i, t) { for (let e = 0, n = t.length; e < n; e++)i[e] = t[e] } function yr(i, t) { let e = Xa[t]; e === void 0 && (e = new Int32Array(t), Xa[t] = e); for (let n = 0; n !== t; ++n)e[n] = i.allocateTextureUnit(); return e } function ed(i, t) { const e = this.cache; e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t) } function nd(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2fv(this.addr, t), ae(e, t) } } function id(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b); else { if (se(e, t)) return; i.uniform3fv(this.addr, t), ae(e, t) } } function rd(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4fv(this.addr, t), ae(e, t) } } function sd(i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix2fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; ja.set(n), i.uniformMatrix2fv(this.addr, !1, ja), ae(e, n) } } function ad(i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix3fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; Ya.set(n), i.uniformMatrix3fv(this.addr, !1, Ya), ae(e, n) } } function od(i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix4fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; qa.set(n), i.uniformMatrix4fv(this.addr, !1, qa), ae(e, n) } } function cd(i, t) { const e = this.cache; e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t) } function ld(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2iv(this.addr, t), ae(e, t) } } function ud(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (se(e, t)) return; i.uniform3iv(this.addr, t), ae(e, t) } } function hd(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4iv(this.addr, t), ae(e, t) } } function fd(i, t) { const e = this.cache; e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t) } function dd(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2uiv(this.addr, t), ae(e, t) } } function pd(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (se(e, t)) return; i.uniform3uiv(this.addr, t), ae(e, t) } } function md(i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4uiv(this.addr, t), ae(e, t) } } function gd(i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r); const s = this.type === i.SAMPLER_2D_SHADOW ? Zo : jo; e.setTexture2D(t || s, r) } function _d(i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || Jo, r) } function xd(i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || $o, r) } function vd(i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || Ko, r) } function Md(i) { switch (i) { case 5126: return ed; case 35664: return nd; case 35665: return id; case 35666: return rd; case 35674: return sd; case 35675: return ad; case 35676: return od; case 5124: case 35670: return cd; case 35667: case 35671: return ld; case 35668: case 35672: return ud; case 35669: case 35673: return hd; case 5125: return fd; case 36294: return dd; case 36295: return pd; case 36296: return md; case 35678: case 36198: case 36298: case 36306: case 35682: return gd; case 35679: case 36299: case 36307: return _d; case 35680: case 36300: case 36308: case 36293: return xd; case 36289: case 36303: case 36311: case 36292: return vd } } function Sd(i, t) { i.uniform1fv(this.addr, t) } function yd(i, t) { const e = di(t, this.size, 2); i.uniform2fv(this.addr, e) } function Ed(i, t) { const e = di(t, this.size, 3); i.uniform3fv(this.addr, e) } function Td(i, t) { const e = di(t, this.size, 4); i.uniform4fv(this.addr, e) } function bd(i, t) { const e = di(t, this.size, 4); i.uniformMatrix2fv(this.addr, !1, e) } function Ad(i, t) { const e = di(t, this.size, 9); i.uniformMatrix3fv(this.addr, !1, e) } function wd(i, t) { const e = di(t, this.size, 16); i.uniformMatrix4fv(this.addr, !1, e) } function Rd(i, t) { i.uniform1iv(this.addr, t) } function Cd(i, t) { i.uniform2iv(this.addr, t) } function Pd(i, t) { i.uniform3iv(this.addr, t) } function Ld(i, t) { i.uniform4iv(this.addr, t) } function Dd(i, t) { i.uniform1uiv(this.addr, t) } function Ud(i, t) { i.uniform2uiv(this.addr, t) } function Id(i, t) { i.uniform3uiv(this.addr, t) } function Nd(i, t) { i.uniform4uiv(this.addr, t) } function Od(i, t, e) { const n = this.cache, r = t.length, s = yr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture2D(t[o] || jo, s[o]) } function Fd(i, t, e) { const n = this.cache, r = t.length, s = yr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture3D(t[o] || Jo, s[o]) } function Bd(i, t, e) { const n = this.cache, r = t.length, s = yr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTextureCube(t[o] || $o, s[o]) } function zd(i, t, e) { const n = this.cache, r = t.length, s = yr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture2DArray(t[o] || Ko, s[o]) } function Hd(i) { switch (i) { case 5126: return Sd; case 35664: return yd; case 35665: return Ed; case 35666: return Td; case 35674: return bd; case 35675: return Ad; case 35676: return wd; case 5124: case 35670: return Rd; case 35667: case 35671: return Cd; case 35668: case 35672: return Pd; case 35669: case 35673: return Ld; case 5125: return Dd; case 36294: return Ud; case 36295: return Id; case 36296: return Nd; case 35678: case 36198: case 36298: case 36306: case 35682: return Od; case 35679: case 36299: case 36307: return Fd; case 35680: case 36300: case 36308: case 36293: return Bd; case 36289: case 36303: case 36311: case 36292: return zd } } class Gd { constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Md(e.type) } } class Vd { constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Hd(e.type) } } class kd { constructor(t) { this.id = t, this.seq = [], this.map = {} } setValue(t, e, n) { const r = this.seq; for (let s = 0, o = r.length; s !== o; ++s) { const a = r[s]; a.setValue(t, e[a.id], n) } } } const ns = /(\w+)(\])?(\[|\.)?/g; function Za(i, t) { i.seq.push(t), i.map[t.id] = t } function Wd(i, t, e) { const n = i.name, r = n.length; for (ns.lastIndex = 0; ;) { const s = ns.exec(n), o = ns.lastIndex; let a = s[1]; const c = s[2] === "]", l = s[3]; if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) { Za(e, l === void 0 ? new Gd(a, i, t) : new Vd(a, i, t)); break } else { let f = e.map[a]; f === void 0 && (f = new kd(a), Za(e, f)), e = f } } } class ur { constructor(t, e) { this.seq = [], this.map = {}; const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS); for (let r = 0; r < n; ++r) { const s = t.getActiveUniform(e, r), o = t.getUniformLocation(e, s.name); Wd(s, o, this) } } setValue(t, e, n, r) { const s = this.map[e]; s !== void 0 && s.setValue(t, n, r) } setOptional(t, e, n) { const r = e[n]; r !== void 0 && this.setValue(t, n, r) } static upload(t, e, n, r) { for (let s = 0, o = e.length; s !== o; ++s) { const a = e[s], c = n[a.id]; c.needsUpdate !== !1 && a.setValue(t, c.value, r) } } static seqWithValue(t, e) { const n = []; for (let r = 0, s = t.length; r !== s; ++r) { const o = t[r]; o.id in e && n.push(o) } return n } } function Ka(i, t, e) { const n = i.createShader(t); return i.shaderSource(n, e), i.compileShader(n), n } const Xd = 37297; let qd = 0; function Yd(i, t) {
	const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length); for (let o = r; o < s; o++) { const a = o + 1; n.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`) } return n.join(`
`)
} function jd(i) { const t = Zt.getPrimaries(Zt.workingColorSpace), e = Zt.getPrimaries(i); let n; switch (t === e ? n = "" : t === mr && e === pr ? n = "LinearDisplayP3ToLinearSRGB" : t === pr && e === mr && (n = "LinearSRGBToLinearDisplayP3"), i) { case Qe: case Mr: return [n, "LinearTransferOETF"]; case re: case Es: return [n, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"] } } function Ja(i, t, e) {
	const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim(); if (n && r === "") return ""; const s = /ERROR: 0:(\d+)/.exec(r); if (s) {
		const o = parseInt(s[1]); return e.toUpperCase() + `

`+ r + `

`+ Yd(i.getShaderSource(t), o)
	} else return r
} function Zd(i, t) { const e = jd(t); return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }` } function Kd(i, t) { let e; switch (t) { case qc: e = "Linear"; break; case Yc: e = "Reinhard"; break; case jc: e = "OptimizedCineon"; break; case Zc: e = "ACESFilmic"; break; case Jc: e = "AgX"; break; case Kc: e = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear" }return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }" } function Jd(i) {
	return [i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ei).join(`
`)
} function $d(i) {
	return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""].filter(ei).join(`
`)
} function Qd(i) {
	const t = []; for (const e in i) { const n = i[e]; n !== !1 && t.push("#define " + e + " " + n) } return t.join(`
`)
} function tp(i, t) { const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES); for (let r = 0; r < n; r++) { const s = i.getActiveAttrib(t, r), o = s.name; let a = 1; s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), e[o] = { type: s.type, location: i.getAttribLocation(t, o), locationSize: a } } return e } function ei(i) { return i !== "" } function $a(i, t) { const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps; return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows) } function Qa(i, t) { return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection) } const ep = /^[ \t]*#include +<([\w\d./]+)>/gm; function _s(i) { return i.replace(ep, ip) } const np = new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]); function ip(i, t) { let e = zt[t]; if (e === void 0) { const n = np.get(t); if (n !== void 0) e = zt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n); else throw new Error("Can not resolve #include <" + t + ">") } return _s(e) } const rp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function to(i) { return i.replace(rp, sp) } function sp(i, t, e, n) { let r = ""; for (let s = parseInt(t); s < parseInt(e); s++)r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return r } function eo(i) {
	let t = "precision " + i.precision + ` float;
precision `+ i.precision + " int;"; return i.precision === "highp" ? t += `
#define HIGH_PRECISION`: i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION`: i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t
} function ap(i) { let t = "SHADOWMAP_TYPE_BASIC"; return i.shadowMapType === xo ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === vo ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Je && (t = "SHADOWMAP_TYPE_VSM"), t } function op(i) { let t = "ENVMAP_TYPE_CUBE"; if (i.envMap) switch (i.envMapMode) { case oi: case ci: t = "ENVMAP_TYPE_CUBE"; break; case vr: t = "ENVMAP_TYPE_CUBE_UV"; break }return t } function cp(i) { let t = "ENVMAP_MODE_REFLECTION"; if (i.envMap) switch (i.envMapMode) { case ci: t = "ENVMAP_MODE_REFRACTION"; break }return t } function lp(i) { let t = "ENVMAP_BLENDING_NONE"; if (i.envMap) switch (i.combine) { case Mo: t = "ENVMAP_BLENDING_MULTIPLY"; break; case Wc: t = "ENVMAP_BLENDING_MIX"; break; case Xc: t = "ENVMAP_BLENDING_ADD"; break }return t } function up(i) { const t = i.envMapCubeUVHeight; if (t === null) return null; const e = Math.log2(t) - 2, n = 1 / t; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e } } function hp(i, t, e, n) {
	const r = i.getContext(), s = e.defines; let o = e.vertexShader, a = e.fragmentShader; const c = ap(e), l = op(e), u = cp(e), f = lp(e), d = up(e), g = e.isWebGL2 ? "" : Jd(e), _ = $d(e), x = Qd(s), p = r.createProgram(); let h, A, v = e.glslVersion ? "#version " + e.glslVersion + `
`: ""; e.isRawShaderMaterial ? (h = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, x].filter(ei).join(`
`), h.length > 0 && (h += `
`), A = [g, "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, x].filter(ei).join(`
`), A.length > 0 && (A += `
`)) : (h = [eo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, x, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.useLegacyLights ? "#define LEGACY_LIGHTS" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ei).join(`
`), A = [g, eo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, x, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + f : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.useLegacyLights ? "#define LEGACY_LIGHTS" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== un ? "#define TONE_MAPPING" : "", e.toneMapping !== un ? zt.tonemapping_pars_fragment : "", e.toneMapping !== un ? Kd("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", zt.colorspace_pars_fragment, Zd("linearToOutputTexel", e.outputColorSpace), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(ei).join(`
`)), o = _s(o), o = $a(o, e), o = Qa(o, e), a = _s(a), a = $a(a, e), a = Qa(a, e), o = to(o), a = to(a), e.isWebGL2 && e.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, h = [_, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ h, A = ["precision mediump sampler2DArray;", "#define varying in", e.glslVersion === va ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === va ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ A); const y = v + h + o, U = v + A + a, P = Ka(r, r.VERTEX_SHADER, y), R = Ka(r, r.FRAGMENT_SHADER, U); r.attachShader(p, P), r.attachShader(p, R), e.index0AttributeName !== void 0 ? r.bindAttribLocation(p, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"), r.linkProgram(p); function q(k) {
		if (i.debug.checkShaderErrors) {
			const ut = r.getProgramInfoLog(p).trim(), N = r.getShaderInfoLog(P).trim(), W = r.getShaderInfoLog(R).trim(); let Z = !0, j = !0; if (r.getProgramParameter(p, r.LINK_STATUS) === !1) if (Z = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, p, P, R); else {
				const B = Ja(r, P, "vertex"), it = Ja(r, R, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(p, r.VALIDATE_STATUS) + `

Program Info Log: `+ ut + `
`+ B + `
`+ it)
			} else ut !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ut) : (N === "" || W === "") && (j = !1); j && (k.diagnostics = { runnable: Z, programLog: ut, vertexShader: { log: N, prefix: h }, fragmentShader: { log: W, prefix: A } })
		} r.deleteShader(P), r.deleteShader(R), S = new ur(r, p), w = tp(r, p)
	} let S; this.getUniforms = function () { return S === void 0 && q(this), S }; let w; this.getAttributes = function () { return w === void 0 && q(this), w }; let J = e.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return J === !1 && (J = r.getProgramParameter(p, Xd)), J }, this.destroy = function () { n.releaseStatesOfProgram(this), r.deleteProgram(p), this.program = void 0 }, this.type = e.shaderType, this.name = e.shaderName, this.id = qd++, this.cacheKey = t, this.usedTimes = 1, this.program = p, this.vertexShader = P, this.fragmentShader = R, this
} let fp = 0; class dp { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(t) { const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t); return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this } remove(t) { const e = this.materialCache.get(t); for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(t), this } getVertexShaderID(t) { return this._getShaderStage(t.vertexShader).id } getFragmentShaderID(t) { return this._getShaderStage(t.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(t) { const e = this.materialCache; let n = e.get(t); return n === void 0 && (n = new Set, e.set(t, n)), n } _getShaderStage(t) { const e = this.shaderCache; let n = e.get(t); return n === void 0 && (n = new pp(t), e.set(t, n)), n } } class pp { constructor(t) { this.id = fp++, this.code = t, this.usedTimes = 0 } } function mp(i, t, e, n, r, s, o) { const a = new Fo, c = new dp, l = [], u = r.isWebGL2, f = r.logarithmicDepthBuffer, d = r.vertexTextures; let g = r.precision; const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function x(S) { return S === 0 ? "uv" : `uv${S}` } function p(S, w, J, k, ut) { const N = k.fog, W = ut.geometry, Z = S.isMeshStandardMaterial ? k.environment : null, j = (S.isMeshStandardMaterial ? e : t).get(S.envMap || Z), B = j && j.mapping === vr ? j.image.height : null, it = _[S.type]; S.precision !== null && (g = r.getMaxPrecision(S.precision), g !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", g, "instead.")); const nt = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, pt = nt !== void 0 ? nt.length : 0; let mt = 0; W.morphAttributes.position !== void 0 && (mt = 1), W.morphAttributes.normal !== void 0 && (mt = 2), W.morphAttributes.color !== void 0 && (mt = 3); let tt, D, C, b; if (it) { const ge = ze[it]; tt = ge.vertexShader, D = ge.fragmentShader } else tt = S.vertexShader, D = S.fragmentShader, c.update(S), C = c.getVertexShaderID(S), b = c.getFragmentShaderID(S); const E = i.getRenderTarget(), Y = ut.isInstancedMesh === !0, rt = ut.isBatchedMesh === !0, G = !!S.map, ot = !!S.matcap, I = !!j, yt = !!S.aoMap, X = !!S.lightMap, et = !!S.bumpMap, st = !!S.normalMap, vt = !!S.displacementMap, F = !!S.emissiveMap, m = !!S.metalnessMap, M = !!S.roughnessMap, H = S.anisotropy > 0, lt = S.clearcoat > 0, ct = S.iridescence > 0, at = S.sheen > 0, wt = S.transmission > 0, Tt = H && !!S.anisotropyMap, bt = lt && !!S.clearcoatMap, Lt = lt && !!S.clearcoatNormalMap, It = lt && !!S.clearcoatRoughnessMap, ht = ct && !!S.iridescenceMap, Vt = ct && !!S.iridescenceThicknessMap, L = at && !!S.sheenColorMap, ft = at && !!S.sheenRoughnessMap, Mt = !!S.specularMap, gt = !!S.specularColorMap, Rt = !!S.specularIntensityMap, kt = wt && !!S.transmissionMap, Xt = wt && !!S.thicknessMap, Ht = !!S.gradientMap, St = !!S.alphaMap, O = S.alphaTest > 0, _t = !!S.alphaHash, xt = !!S.extensions, Dt = !!W.attributes.uv1, Ct = !!W.attributes.uv2, qt = !!W.attributes.uv3; let jt = un; return S.toneMapped && (E === null || E.isXRRenderTarget === !0) && (jt = i.toneMapping), { isWebGL2: u, shaderID: it, shaderType: S.type, shaderName: S.name, vertexShader: tt, fragmentShader: D, defines: S.defines, customVertexShaderID: C, customFragmentShaderID: b, isRawShaderMaterial: S.isRawShaderMaterial === !0, glslVersion: S.glslVersion, precision: g, batching: rt, instancing: Y, instancingColor: Y && ut.instanceColor !== null, supportsVertexTextures: d, outputColorSpace: E === null ? i.outputColorSpace : E.isXRRenderTarget === !0 ? E.texture.colorSpace : Qe, map: G, matcap: ot, envMap: I, envMapMode: I && j.mapping, envMapCubeUVHeight: B, aoMap: yt, lightMap: X, bumpMap: et, normalMap: st, displacementMap: d && vt, emissiveMap: F, normalMapObjectSpace: st && S.normalMapType === ll, normalMapTangentSpace: st && S.normalMapType === Po, metalnessMap: m, roughnessMap: M, anisotropy: H, anisotropyMap: Tt, clearcoat: lt, clearcoatMap: bt, clearcoatNormalMap: Lt, clearcoatRoughnessMap: It, iridescence: ct, iridescenceMap: ht, iridescenceThicknessMap: Vt, sheen: at, sheenColorMap: L, sheenRoughnessMap: ft, specularMap: Mt, specularColorMap: gt, specularIntensityMap: Rt, transmission: wt, transmissionMap: kt, thicknessMap: Xt, gradientMap: Ht, opaque: S.transparent === !1 && S.blending === ii, alphaMap: St, alphaTest: O, alphaHash: _t, combine: S.combine, mapUv: G && x(S.map.channel), aoMapUv: yt && x(S.aoMap.channel), lightMapUv: X && x(S.lightMap.channel), bumpMapUv: et && x(S.bumpMap.channel), normalMapUv: st && x(S.normalMap.channel), displacementMapUv: vt && x(S.displacementMap.channel), emissiveMapUv: F && x(S.emissiveMap.channel), metalnessMapUv: m && x(S.metalnessMap.channel), roughnessMapUv: M && x(S.roughnessMap.channel), anisotropyMapUv: Tt && x(S.anisotropyMap.channel), clearcoatMapUv: bt && x(S.clearcoatMap.channel), clearcoatNormalMapUv: Lt && x(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: It && x(S.clearcoatRoughnessMap.channel), iridescenceMapUv: ht && x(S.iridescenceMap.channel), iridescenceThicknessMapUv: Vt && x(S.iridescenceThicknessMap.channel), sheenColorMapUv: L && x(S.sheenColorMap.channel), sheenRoughnessMapUv: ft && x(S.sheenRoughnessMap.channel), specularMapUv: Mt && x(S.specularMap.channel), specularColorMapUv: gt && x(S.specularColorMap.channel), specularIntensityMapUv: Rt && x(S.specularIntensityMap.channel), transmissionMapUv: kt && x(S.transmissionMap.channel), thicknessMapUv: Xt && x(S.thicknessMap.channel), alphaMapUv: St && x(S.alphaMap.channel), vertexTangents: !!W.attributes.tangent && (st || H), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, vertexUv1s: Dt, vertexUv2s: Ct, vertexUv3s: qt, pointsUvs: ut.isPoints === !0 && !!W.attributes.uv && (G || St), fog: !!N, useFog: S.fog === !0, fogExp2: N && N.isFogExp2, flatShading: S.flatShading === !0, sizeAttenuation: S.sizeAttenuation === !0, logarithmicDepthBuffer: f, skinning: ut.isSkinnedMesh === !0, morphTargets: W.morphAttributes.position !== void 0, morphNormals: W.morphAttributes.normal !== void 0, morphColors: W.morphAttributes.color !== void 0, morphTargetsCount: pt, morphTextureStride: mt, numDirLights: w.directional.length, numPointLights: w.point.length, numSpotLights: w.spot.length, numSpotLightMaps: w.spotLightMap.length, numRectAreaLights: w.rectArea.length, numHemiLights: w.hemi.length, numDirLightShadows: w.directionalShadowMap.length, numPointLightShadows: w.pointShadowMap.length, numSpotLightShadows: w.spotShadowMap.length, numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps, numLightProbes: w.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && J.length > 0, shadowMapType: i.shadowMap.type, toneMapping: jt, useLegacyLights: i._useLegacyLights, decodeVideoTexture: G && S.map.isVideoTexture === !0 && Zt.getTransfer(S.map.colorSpace) === Jt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Ne, flipSided: S.side === Ee, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionDerivatives: xt && S.extensions.derivatives === !0, extensionFragDepth: xt && S.extensions.fragDepth === !0, extensionDrawBuffers: xt && S.extensions.drawBuffers === !0, extensionShaderTextureLOD: xt && S.extensions.shaderTextureLOD === !0, extensionClipCullDistance: xt && S.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"), rendererExtensionFragDepth: u || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() } } function h(S) { const w = []; if (S.shaderID ? w.push(S.shaderID) : (w.push(S.customVertexShaderID), w.push(S.customFragmentShaderID)), S.defines !== void 0) for (const J in S.defines) w.push(J), w.push(S.defines[J]); return S.isRawShaderMaterial === !1 && (A(w, S), v(w, S), w.push(i.outputColorSpace)), w.push(S.customProgramCacheKey), w.join() } function A(S, w) { S.push(w.precision), S.push(w.outputColorSpace), S.push(w.envMapMode), S.push(w.envMapCubeUVHeight), S.push(w.mapUv), S.push(w.alphaMapUv), S.push(w.lightMapUv), S.push(w.aoMapUv), S.push(w.bumpMapUv), S.push(w.normalMapUv), S.push(w.displacementMapUv), S.push(w.emissiveMapUv), S.push(w.metalnessMapUv), S.push(w.roughnessMapUv), S.push(w.anisotropyMapUv), S.push(w.clearcoatMapUv), S.push(w.clearcoatNormalMapUv), S.push(w.clearcoatRoughnessMapUv), S.push(w.iridescenceMapUv), S.push(w.iridescenceThicknessMapUv), S.push(w.sheenColorMapUv), S.push(w.sheenRoughnessMapUv), S.push(w.specularMapUv), S.push(w.specularColorMapUv), S.push(w.specularIntensityMapUv), S.push(w.transmissionMapUv), S.push(w.thicknessMapUv), S.push(w.combine), S.push(w.fogExp2), S.push(w.sizeAttenuation), S.push(w.morphTargetsCount), S.push(w.morphAttributeCount), S.push(w.numDirLights), S.push(w.numPointLights), S.push(w.numSpotLights), S.push(w.numSpotLightMaps), S.push(w.numHemiLights), S.push(w.numRectAreaLights), S.push(w.numDirLightShadows), S.push(w.numPointLightShadows), S.push(w.numSpotLightShadows), S.push(w.numSpotLightShadowsWithMaps), S.push(w.numLightProbes), S.push(w.shadowMapType), S.push(w.toneMapping), S.push(w.numClippingPlanes), S.push(w.numClipIntersection), S.push(w.depthPacking) } function v(S, w) { a.disableAll(), w.isWebGL2 && a.enable(0), w.supportsVertexTextures && a.enable(1), w.instancing && a.enable(2), w.instancingColor && a.enable(3), w.matcap && a.enable(4), w.envMap && a.enable(5), w.normalMapObjectSpace && a.enable(6), w.normalMapTangentSpace && a.enable(7), w.clearcoat && a.enable(8), w.iridescence && a.enable(9), w.alphaTest && a.enable(10), w.vertexColors && a.enable(11), w.vertexAlphas && a.enable(12), w.vertexUv1s && a.enable(13), w.vertexUv2s && a.enable(14), w.vertexUv3s && a.enable(15), w.vertexTangents && a.enable(16), w.anisotropy && a.enable(17), w.alphaHash && a.enable(18), w.batching && a.enable(19), S.push(a.mask), a.disableAll(), w.fog && a.enable(0), w.useFog && a.enable(1), w.flatShading && a.enable(2), w.logarithmicDepthBuffer && a.enable(3), w.skinning && a.enable(4), w.morphTargets && a.enable(5), w.morphNormals && a.enable(6), w.morphColors && a.enable(7), w.premultipliedAlpha && a.enable(8), w.shadowMapEnabled && a.enable(9), w.useLegacyLights && a.enable(10), w.doubleSided && a.enable(11), w.flipSided && a.enable(12), w.useDepthPacking && a.enable(13), w.dithering && a.enable(14), w.transmission && a.enable(15), w.sheen && a.enable(16), w.opaque && a.enable(17), w.pointsUvs && a.enable(18), w.decodeVideoTexture && a.enable(19), S.push(a.mask) } function y(S) { const w = _[S.type]; let J; if (w) { const k = ze[w]; J = Kl.clone(k.uniforms) } else J = S.uniforms; return J } function U(S, w) { let J; for (let k = 0, ut = l.length; k < ut; k++) { const N = l[k]; if (N.cacheKey === w) { J = N, ++J.usedTimes; break } } return J === void 0 && (J = new hp(i, w, S, s), l.push(J)), J } function P(S) { if (--S.usedTimes === 0) { const w = l.indexOf(S); l[w] = l[l.length - 1], l.pop(), S.destroy() } } function R(S) { c.remove(S) } function q() { c.dispose() } return { getParameters: p, getProgramCacheKey: h, getUniforms: y, acquireProgram: U, releaseProgram: P, releaseShaderCache: R, programs: l, dispose: q } } function gp() { let i = new WeakMap; function t(s) { let o = i.get(s); return o === void 0 && (o = {}, i.set(s, o)), o } function e(s) { i.delete(s) } function n(s, o, a) { i.get(s)[o] = a } function r() { i = new WeakMap } return { get: t, remove: e, update: n, dispose: r } } function _p(i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id } function no(i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id } function io() { const i = []; let t = 0; const e = [], n = [], r = []; function s() { t = 0, e.length = 0, n.length = 0, r.length = 0 } function o(f, d, g, _, x, p) { let h = i[t]; return h === void 0 ? (h = { id: f.id, object: f, geometry: d, material: g, groupOrder: _, renderOrder: f.renderOrder, z: x, group: p }, i[t] = h) : (h.id = f.id, h.object = f, h.geometry = d, h.material = g, h.groupOrder = _, h.renderOrder = f.renderOrder, h.z = x, h.group = p), t++, h } function a(f, d, g, _, x, p) { const h = o(f, d, g, _, x, p); g.transmission > 0 ? n.push(h) : g.transparent === !0 ? r.push(h) : e.push(h) } function c(f, d, g, _, x, p) { const h = o(f, d, g, _, x, p); g.transmission > 0 ? n.unshift(h) : g.transparent === !0 ? r.unshift(h) : e.unshift(h) } function l(f, d) { e.length > 1 && e.sort(f || _p), n.length > 1 && n.sort(d || no), r.length > 1 && r.sort(d || no) } function u() { for (let f = t, d = i.length; f < d; f++) { const g = i[f]; if (g.id === null) break; g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null } } return { opaque: e, transmissive: n, transparent: r, init: s, push: a, unshift: c, finish: u, sort: l } } function xp() { let i = new WeakMap; function t(n, r) { const s = i.get(n); let o; return s === void 0 ? (o = new io, i.set(n, [o])) : r >= s.length ? (o = new io, s.push(o)) : o = s[r], o } function e() { i = new WeakMap } return { get: t, dispose: e } } function vp() { const i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { direction: new z, color: new Yt }; break; case "SpotLight": e = { position: new z, direction: new z, color: new Yt, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": e = { position: new z, color: new Yt, distance: 0, decay: 0 }; break; case "HemisphereLight": e = { direction: new z, skyColor: new Yt, groundColor: new Yt }; break; case "RectAreaLight": e = { color: new Yt, position: new z, halfWidth: new z, halfHeight: new z }; break }return i[t.id] = e, e } } } function Mp() { const i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new dt }; break; case "SpotLight": e = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new dt }; break; case "PointLight": e = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new dt, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return i[t.id] = e, e } } } let Sp = 0; function yp(i, t) { return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0) } function Ep(i, t) { const e = new vp, n = Mp(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let u = 0; u < 9; u++)r.probe.push(new z); const s = new z, o = new ie, a = new ie; function c(u, f) { let d = 0, g = 0, _ = 0; for (let k = 0; k < 9; k++)r.probe[k].set(0, 0, 0); let x = 0, p = 0, h = 0, A = 0, v = 0, y = 0, U = 0, P = 0, R = 0, q = 0, S = 0; u.sort(yp); const w = f === !0 ? Math.PI : 1; for (let k = 0, ut = u.length; k < ut; k++) { const N = u[k], W = N.color, Z = N.intensity, j = N.distance, B = N.shadow && N.shadow.map ? N.shadow.map.texture : null; if (N.isAmbientLight) d += W.r * Z * w, g += W.g * Z * w, _ += W.b * Z * w; else if (N.isLightProbe) { for (let it = 0; it < 9; it++)r.probe[it].addScaledVector(N.sh.coefficients[it], Z); S++ } else if (N.isDirectionalLight) { const it = e.get(N); if (it.color.copy(N.color).multiplyScalar(N.intensity * w), N.castShadow) { const nt = N.shadow, pt = n.get(N); pt.shadowBias = nt.bias, pt.shadowNormalBias = nt.normalBias, pt.shadowRadius = nt.radius, pt.shadowMapSize = nt.mapSize, r.directionalShadow[x] = pt, r.directionalShadowMap[x] = B, r.directionalShadowMatrix[x] = N.shadow.matrix, y++ } r.directional[x] = it, x++ } else if (N.isSpotLight) { const it = e.get(N); it.position.setFromMatrixPosition(N.matrixWorld), it.color.copy(W).multiplyScalar(Z * w), it.distance = j, it.coneCos = Math.cos(N.angle), it.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), it.decay = N.decay, r.spot[h] = it; const nt = N.shadow; if (N.map && (r.spotLightMap[R] = N.map, R++, nt.updateMatrices(N), N.castShadow && q++), r.spotLightMatrix[h] = nt.matrix, N.castShadow) { const pt = n.get(N); pt.shadowBias = nt.bias, pt.shadowNormalBias = nt.normalBias, pt.shadowRadius = nt.radius, pt.shadowMapSize = nt.mapSize, r.spotShadow[h] = pt, r.spotShadowMap[h] = B, P++ } h++ } else if (N.isRectAreaLight) { const it = e.get(N); it.color.copy(W).multiplyScalar(Z), it.halfWidth.set(N.width * .5, 0, 0), it.halfHeight.set(0, N.height * .5, 0), r.rectArea[A] = it, A++ } else if (N.isPointLight) { const it = e.get(N); if (it.color.copy(N.color).multiplyScalar(N.intensity * w), it.distance = N.distance, it.decay = N.decay, N.castShadow) { const nt = N.shadow, pt = n.get(N); pt.shadowBias = nt.bias, pt.shadowNormalBias = nt.normalBias, pt.shadowRadius = nt.radius, pt.shadowMapSize = nt.mapSize, pt.shadowCameraNear = nt.camera.near, pt.shadowCameraFar = nt.camera.far, r.pointShadow[p] = pt, r.pointShadowMap[p] = B, r.pointShadowMatrix[p] = N.shadow.matrix, U++ } r.point[p] = it, p++ } else if (N.isHemisphereLight) { const it = e.get(N); it.skyColor.copy(N.color).multiplyScalar(Z * w), it.groundColor.copy(N.groundColor).multiplyScalar(Z * w), r.hemi[v] = it, v++ } } A > 0 && (t.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Et.LTC_FLOAT_1, r.rectAreaLTC2 = Et.LTC_FLOAT_2) : (r.rectAreaLTC1 = Et.LTC_HALF_1, r.rectAreaLTC2 = Et.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Et.LTC_FLOAT_1, r.rectAreaLTC2 = Et.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = Et.LTC_HALF_1, r.rectAreaLTC2 = Et.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = g, r.ambient[2] = _; const J = r.hash; (J.directionalLength !== x || J.pointLength !== p || J.spotLength !== h || J.rectAreaLength !== A || J.hemiLength !== v || J.numDirectionalShadows !== y || J.numPointShadows !== U || J.numSpotShadows !== P || J.numSpotMaps !== R || J.numLightProbes !== S) && (r.directional.length = x, r.spot.length = h, r.rectArea.length = A, r.point.length = p, r.hemi.length = v, r.directionalShadow.length = y, r.directionalShadowMap.length = y, r.pointShadow.length = U, r.pointShadowMap.length = U, r.spotShadow.length = P, r.spotShadowMap.length = P, r.directionalShadowMatrix.length = y, r.pointShadowMatrix.length = U, r.spotLightMatrix.length = P + R - q, r.spotLightMap.length = R, r.numSpotLightShadowsWithMaps = q, r.numLightProbes = S, J.directionalLength = x, J.pointLength = p, J.spotLength = h, J.rectAreaLength = A, J.hemiLength = v, J.numDirectionalShadows = y, J.numPointShadows = U, J.numSpotShadows = P, J.numSpotMaps = R, J.numLightProbes = S, r.version = Sp++) } function l(u, f) { let d = 0, g = 0, _ = 0, x = 0, p = 0; const h = f.matrixWorldInverse; for (let A = 0, v = u.length; A < v; A++) { const y = u[A]; if (y.isDirectionalLight) { const U = r.directional[d]; U.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), U.direction.sub(s), U.direction.transformDirection(h), d++ } else if (y.isSpotLight) { const U = r.spot[_]; U.position.setFromMatrixPosition(y.matrixWorld), U.position.applyMatrix4(h), U.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), U.direction.sub(s), U.direction.transformDirection(h), _++ } else if (y.isRectAreaLight) { const U = r.rectArea[x]; U.position.setFromMatrixPosition(y.matrixWorld), U.position.applyMatrix4(h), a.identity(), o.copy(y.matrixWorld), o.premultiply(h), a.extractRotation(o), U.halfWidth.set(y.width * .5, 0, 0), U.halfHeight.set(0, y.height * .5, 0), U.halfWidth.applyMatrix4(a), U.halfHeight.applyMatrix4(a), x++ } else if (y.isPointLight) { const U = r.point[g]; U.position.setFromMatrixPosition(y.matrixWorld), U.position.applyMatrix4(h), g++ } else if (y.isHemisphereLight) { const U = r.hemi[p]; U.direction.setFromMatrixPosition(y.matrixWorld), U.direction.transformDirection(h), p++ } } } return { setup: c, setupView: l, state: r } } function ro(i, t) { const e = new Ep(i, t), n = [], r = []; function s() { n.length = 0, r.length = 0 } function o(f) { n.push(f) } function a(f) { r.push(f) } function c(f) { e.setup(n, f) } function l(f) { e.setupView(n, f) } return { init: s, state: { lightsArray: n, shadowsArray: r, lights: e }, setupLights: c, setupLightsView: l, pushLight: o, pushShadow: a } } function Tp(i, t) { let e = new WeakMap; function n(s, o = 0) { const a = e.get(s); let c; return a === void 0 ? (c = new ro(i, t), e.set(s, [c])) : o >= a.length ? (c = new ro(i, t), a.push(c)) : c = a[o], c } function r() { e = new WeakMap } return { get: n, dispose: r } } class bp extends Li { constructor(t) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = ol, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t) } copy(t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this } } class Ap extends Li { constructor(t) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t) } copy(t) { return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this } } const wp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Rp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Cp(i, t, e) { let n = new As; const r = new dt, s = new dt, o = new he, a = new bp({ depthPacking: cl }), c = new Ap, l = {}, u = e.maxTextureSize, f = { [fn]: Ee, [Ee]: fn, [Ne]: Ne }, d = new Pn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new dt }, radius: { value: 4 } }, vertexShader: wp, fragmentShader: Rp }), g = d.clone(); g.defines.HORIZONTAL_PASS = 1; const _ = new dn; _.setAttribute("position", new Ge(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const x = new He(_, d), p = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = xo; let h = this.type; this.render = function (P, R, q) { if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || P.length === 0) return; const S = i.getRenderTarget(), w = i.getActiveCubeFace(), J = i.getActiveMipmapLevel(), k = i.state; k.setBlending(ln), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1); const ut = h !== Je && this.type === Je, N = h === Je && this.type !== Je; for (let W = 0, Z = P.length; W < Z; W++) { const j = P[W], B = j.shadow; if (B === void 0) { console.warn("THREE.WebGLShadowMap:", j, "has no shadow."); continue } if (B.autoUpdate === !1 && B.needsUpdate === !1) continue; r.copy(B.mapSize); const it = B.getFrameExtents(); if (r.multiply(it), s.copy(B.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / it.x), r.x = s.x * it.x, B.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / it.y), r.y = s.y * it.y, B.mapSize.y = s.y)), B.map === null || ut === !0 || N === !0) { const pt = this.type !== Je ? { minFilter: Me, magFilter: Me } : {}; B.map !== null && B.map.dispose(), B.map = new Rn(r.x, r.y, pt), B.map.texture.name = j.name + ".shadowMap", B.camera.updateProjectionMatrix() } i.setRenderTarget(B.map), i.clear(); const nt = B.getViewportCount(); for (let pt = 0; pt < nt; pt++) { const mt = B.getViewport(pt); o.set(s.x * mt.x, s.y * mt.y, s.x * mt.z, s.y * mt.w), k.viewport(o), B.updateMatrices(j, pt), n = B.getFrustum(), y(R, q, B.camera, j, this.type) } B.isPointLightShadow !== !0 && this.type === Je && A(B, q), B.needsUpdate = !1 } h = this.type, p.needsUpdate = !1, i.setRenderTarget(S, w, J) }; function A(P, R) { const q = t.update(x); d.defines.VSM_SAMPLES !== P.blurSamples && (d.defines.VSM_SAMPLES = P.blurSamples, g.defines.VSM_SAMPLES = P.blurSamples, d.needsUpdate = !0, g.needsUpdate = !0), P.mapPass === null && (P.mapPass = new Rn(r.x, r.y)), d.uniforms.shadow_pass.value = P.map.texture, d.uniforms.resolution.value = P.mapSize, d.uniforms.radius.value = P.radius, i.setRenderTarget(P.mapPass), i.clear(), i.renderBufferDirect(R, null, q, d, x, null), g.uniforms.shadow_pass.value = P.mapPass.texture, g.uniforms.resolution.value = P.mapSize, g.uniforms.radius.value = P.radius, i.setRenderTarget(P.map), i.clear(), i.renderBufferDirect(R, null, q, g, x, null) } function v(P, R, q, S) { let w = null; const J = q.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial; if (J !== void 0) w = J; else if (w = q.isPointLight === !0 ? c : a, i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) { const k = w.uuid, ut = R.uuid; let N = l[k]; N === void 0 && (N = {}, l[k] = N); let W = N[ut]; W === void 0 && (W = w.clone(), N[ut] = W, R.addEventListener("dispose", U)), w = W } if (w.visible = R.visible, w.wireframe = R.wireframe, S === Je ? w.side = R.shadowSide !== null ? R.shadowSide : R.side : w.side = R.shadowSide !== null ? R.shadowSide : f[R.side], w.alphaMap = R.alphaMap, w.alphaTest = R.alphaTest, w.map = R.map, w.clipShadows = R.clipShadows, w.clippingPlanes = R.clippingPlanes, w.clipIntersection = R.clipIntersection, w.displacementMap = R.displacementMap, w.displacementScale = R.displacementScale, w.displacementBias = R.displacementBias, w.wireframeLinewidth = R.wireframeLinewidth, w.linewidth = R.linewidth, q.isPointLight === !0 && w.isMeshDistanceMaterial === !0) { const k = i.properties.get(w); k.light = q } return w } function y(P, R, q, S, w) { if (P.visible === !1) return; if (P.layers.test(R.layers) && (P.isMesh || P.isLine || P.isPoints) && (P.castShadow || P.receiveShadow && w === Je) && (!P.frustumCulled || n.intersectsObject(P))) { P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, P.matrixWorld); const ut = t.update(P), N = P.material; if (Array.isArray(N)) { const W = ut.groups; for (let Z = 0, j = W.length; Z < j; Z++) { const B = W[Z], it = N[B.materialIndex]; if (it && it.visible) { const nt = v(P, it, S, w); P.onBeforeShadow(i, P, R, q, ut, nt, B), i.renderBufferDirect(q, null, ut, nt, P, B), P.onAfterShadow(i, P, R, q, ut, nt, B) } } } else if (N.visible) { const W = v(P, N, S, w); P.onBeforeShadow(i, P, R, q, ut, W, null), i.renderBufferDirect(q, null, ut, W, P, null), P.onAfterShadow(i, P, R, q, ut, W, null) } } const k = P.children; for (let ut = 0, N = k.length; ut < N; ut++)y(k[ut], R, q, S, w) } function U(P) { P.target.removeEventListener("dispose", U); for (const q in l) { const S = l[q], w = P.target.uuid; w in S && (S[w].dispose(), delete S[w]) } } } function Pp(i, t, e) { const n = e.isWebGL2; function r() { let O = !1; const _t = new he; let xt = null; const Dt = new he(0, 0, 0, 0); return { setMask: function (Ct) { xt !== Ct && !O && (i.colorMask(Ct, Ct, Ct, Ct), xt = Ct) }, setLocked: function (Ct) { O = Ct }, setClear: function (Ct, qt, jt, oe, ge) { ge === !0 && (Ct *= oe, qt *= oe, jt *= oe), _t.set(Ct, qt, jt, oe), Dt.equals(_t) === !1 && (i.clearColor(Ct, qt, jt, oe), Dt.copy(_t)) }, reset: function () { O = !1, xt = null, Dt.set(-1, 0, 0, 0) } } } function s() { let O = !1, _t = null, xt = null, Dt = null; return { setTest: function (Ct) { Ct ? rt(i.DEPTH_TEST) : G(i.DEPTH_TEST) }, setMask: function (Ct) { _t !== Ct && !O && (i.depthMask(Ct), _t = Ct) }, setFunc: function (Ct) { if (xt !== Ct) { switch (Ct) { case Fc: i.depthFunc(i.NEVER); break; case Bc: i.depthFunc(i.ALWAYS); break; case zc: i.depthFunc(i.LESS); break; case fr: i.depthFunc(i.LEQUAL); break; case Hc: i.depthFunc(i.EQUAL); break; case Gc: i.depthFunc(i.GEQUAL); break; case Vc: i.depthFunc(i.GREATER); break; case kc: i.depthFunc(i.NOTEQUAL); break; default: i.depthFunc(i.LEQUAL) }xt = Ct } }, setLocked: function (Ct) { O = Ct }, setClear: function (Ct) { Dt !== Ct && (i.clearDepth(Ct), Dt = Ct) }, reset: function () { O = !1, _t = null, xt = null, Dt = null } } } function o() { let O = !1, _t = null, xt = null, Dt = null, Ct = null, qt = null, jt = null, oe = null, ge = null; return { setTest: function (Kt) { O || (Kt ? rt(i.STENCIL_TEST) : G(i.STENCIL_TEST)) }, setMask: function (Kt) { _t !== Kt && !O && (i.stencilMask(Kt), _t = Kt) }, setFunc: function (Kt, _e, Be) { (xt !== Kt || Dt !== _e || Ct !== Be) && (i.stencilFunc(Kt, _e, Be), xt = Kt, Dt = _e, Ct = Be) }, setOp: function (Kt, _e, Be) { (qt !== Kt || jt !== _e || oe !== Be) && (i.stencilOp(Kt, _e, Be), qt = Kt, jt = _e, oe = Be) }, setLocked: function (Kt) { O = Kt }, setClear: function (Kt) { ge !== Kt && (i.clearStencil(Kt), ge = Kt) }, reset: function () { O = !1, _t = null, xt = null, Dt = null, Ct = null, qt = null, jt = null, oe = null, ge = null } } } const a = new r, c = new s, l = new o, u = new WeakMap, f = new WeakMap; let d = {}, g = {}, _ = new WeakMap, x = [], p = null, h = !1, A = null, v = null, y = null, U = null, P = null, R = null, q = null, S = new Yt(0, 0, 0), w = 0, J = !1, k = null, ut = null, N = null, W = null, Z = null; const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let B = !1, it = 0; const nt = i.getParameter(i.VERSION); nt.indexOf("WebGL") !== -1 ? (it = parseFloat(/^WebGL (\d)/.exec(nt)[1]), B = it >= 1) : nt.indexOf("OpenGL ES") !== -1 && (it = parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]), B = it >= 2); let pt = null, mt = {}; const tt = i.getParameter(i.SCISSOR_BOX), D = i.getParameter(i.VIEWPORT), C = new he().fromArray(tt), b = new he().fromArray(D); function E(O, _t, xt, Dt) { const Ct = new Uint8Array(4), qt = i.createTexture(); i.bindTexture(O, qt), i.texParameteri(O, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(O, i.TEXTURE_MAG_FILTER, i.NEAREST); for (let jt = 0; jt < xt; jt++)n && (O === i.TEXTURE_3D || O === i.TEXTURE_2D_ARRAY) ? i.texImage3D(_t, 0, i.RGBA, 1, 1, Dt, 0, i.RGBA, i.UNSIGNED_BYTE, Ct) : i.texImage2D(_t + jt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ct); return qt } const Y = {}; Y[i.TEXTURE_2D] = E(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = E(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Y[i.TEXTURE_2D_ARRAY] = E(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = E(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), rt(i.DEPTH_TEST), c.setFunc(fr), F(!1), m(zs), rt(i.CULL_FACE), st(ln); function rt(O) { d[O] !== !0 && (i.enable(O), d[O] = !0) } function G(O) { d[O] !== !1 && (i.disable(O), d[O] = !1) } function ot(O, _t) { return g[O] !== _t ? (i.bindFramebuffer(O, _t), g[O] = _t, n && (O === i.DRAW_FRAMEBUFFER && (g[i.FRAMEBUFFER] = _t), O === i.FRAMEBUFFER && (g[i.DRAW_FRAMEBUFFER] = _t)), !0) : !1 } function I(O, _t) { let xt = x, Dt = !1; if (O) if (xt = _.get(_t), xt === void 0 && (xt = [], _.set(_t, xt)), O.isWebGLMultipleRenderTargets) { const Ct = O.texture; if (xt.length !== Ct.length || xt[0] !== i.COLOR_ATTACHMENT0) { for (let qt = 0, jt = Ct.length; qt < jt; qt++)xt[qt] = i.COLOR_ATTACHMENT0 + qt; xt.length = Ct.length, Dt = !0 } } else xt[0] !== i.COLOR_ATTACHMENT0 && (xt[0] = i.COLOR_ATTACHMENT0, Dt = !0); else xt[0] !== i.BACK && (xt[0] = i.BACK, Dt = !0); Dt && (e.isWebGL2 ? i.drawBuffers(xt) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt)) } function yt(O) { return p !== O ? (i.useProgram(O), p = O, !0) : !1 } const X = { [En]: i.FUNC_ADD, [yc]: i.FUNC_SUBTRACT, [Ec]: i.FUNC_REVERSE_SUBTRACT }; if (n) X[ks] = i.MIN, X[Ws] = i.MAX; else { const O = t.get("EXT_blend_minmax"); O !== null && (X[ks] = O.MIN_EXT, X[Ws] = O.MAX_EXT) } const et = { [Tc]: i.ZERO, [bc]: i.ONE, [Ac]: i.SRC_COLOR, [us]: i.SRC_ALPHA, [Dc]: i.SRC_ALPHA_SATURATE, [Pc]: i.DST_COLOR, [Rc]: i.DST_ALPHA, [wc]: i.ONE_MINUS_SRC_COLOR, [hs]: i.ONE_MINUS_SRC_ALPHA, [Lc]: i.ONE_MINUS_DST_COLOR, [Cc]: i.ONE_MINUS_DST_ALPHA, [Uc]: i.CONSTANT_COLOR, [Ic]: i.ONE_MINUS_CONSTANT_COLOR, [Nc]: i.CONSTANT_ALPHA, [Oc]: i.ONE_MINUS_CONSTANT_ALPHA }; function st(O, _t, xt, Dt, Ct, qt, jt, oe, ge, Kt) { if (O === ln) { h === !0 && (G(i.BLEND), h = !1); return } if (h === !1 && (rt(i.BLEND), h = !0), O !== Sc) { if (O !== A || Kt !== J) { if ((v !== En || P !== En) && (i.blendEquation(i.FUNC_ADD), v = En, P = En), Kt) switch (O) { case ii: i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Hs: i.blendFunc(i.ONE, i.ONE); break; case Gs: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case Vs: i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", O); break } else switch (O) { case ii: i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Hs: i.blendFunc(i.SRC_ALPHA, i.ONE); break; case Gs: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case Vs: i.blendFunc(i.ZERO, i.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", O); break }y = null, U = null, R = null, q = null, S.set(0, 0, 0), w = 0, A = O, J = Kt } return } Ct = Ct || _t, qt = qt || xt, jt = jt || Dt, (_t !== v || Ct !== P) && (i.blendEquationSeparate(X[_t], X[Ct]), v = _t, P = Ct), (xt !== y || Dt !== U || qt !== R || jt !== q) && (i.blendFuncSeparate(et[xt], et[Dt], et[qt], et[jt]), y = xt, U = Dt, R = qt, q = jt), (oe.equals(S) === !1 || ge !== w) && (i.blendColor(oe.r, oe.g, oe.b, ge), S.copy(oe), w = ge), A = O, J = !1 } function vt(O, _t) { O.side === Ne ? G(i.CULL_FACE) : rt(i.CULL_FACE); let xt = O.side === Ee; _t && (xt = !xt), F(xt), O.blending === ii && O.transparent === !1 ? st(ln) : st(O.blending, O.blendEquation, O.blendSrc, O.blendDst, O.blendEquationAlpha, O.blendSrcAlpha, O.blendDstAlpha, O.blendColor, O.blendAlpha, O.premultipliedAlpha), c.setFunc(O.depthFunc), c.setTest(O.depthTest), c.setMask(O.depthWrite), a.setMask(O.colorWrite); const Dt = O.stencilWrite; l.setTest(Dt), Dt && (l.setMask(O.stencilWriteMask), l.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask), l.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)), H(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits), O.alphaToCoverage === !0 ? rt(i.SAMPLE_ALPHA_TO_COVERAGE) : G(i.SAMPLE_ALPHA_TO_COVERAGE) } function F(O) { k !== O && (O ? i.frontFace(i.CW) : i.frontFace(i.CCW), k = O) } function m(O) { O !== vc ? (rt(i.CULL_FACE), O !== ut && (O === zs ? i.cullFace(i.BACK) : O === Mc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : G(i.CULL_FACE), ut = O } function M(O) { O !== N && (B && i.lineWidth(O), N = O) } function H(O, _t, xt) { O ? (rt(i.POLYGON_OFFSET_FILL), (W !== _t || Z !== xt) && (i.polygonOffset(_t, xt), W = _t, Z = xt)) : G(i.POLYGON_OFFSET_FILL) } function lt(O) { O ? rt(i.SCISSOR_TEST) : G(i.SCISSOR_TEST) } function ct(O) { O === void 0 && (O = i.TEXTURE0 + j - 1), pt !== O && (i.activeTexture(O), pt = O) } function at(O, _t, xt) { xt === void 0 && (pt === null ? xt = i.TEXTURE0 + j - 1 : xt = pt); let Dt = mt[xt]; Dt === void 0 && (Dt = { type: void 0, texture: void 0 }, mt[xt] = Dt), (Dt.type !== O || Dt.texture !== _t) && (pt !== xt && (i.activeTexture(xt), pt = xt), i.bindTexture(O, _t || Y[O]), Dt.type = O, Dt.texture = _t) } function wt() { const O = mt[pt]; O !== void 0 && O.type !== void 0 && (i.bindTexture(O.type, null), O.type = void 0, O.texture = void 0) } function Tt() { try { i.compressedTexImage2D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function bt() { try { i.compressedTexImage3D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function Lt() { try { i.texSubImage2D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function It() { try { i.texSubImage3D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function ht() { try { i.compressedTexSubImage2D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function Vt() { try { i.compressedTexSubImage3D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function L() { try { i.texStorage2D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function ft() { try { i.texStorage3D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function Mt() { try { i.texImage2D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function gt() { try { i.texImage3D.apply(i, arguments) } catch (O) { console.error("THREE.WebGLState:", O) } } function Rt(O) { C.equals(O) === !1 && (i.scissor(O.x, O.y, O.z, O.w), C.copy(O)) } function kt(O) { b.equals(O) === !1 && (i.viewport(O.x, O.y, O.z, O.w), b.copy(O)) } function Xt(O, _t) { let xt = f.get(_t); xt === void 0 && (xt = new WeakMap, f.set(_t, xt)); let Dt = xt.get(O); Dt === void 0 && (Dt = i.getUniformBlockIndex(_t, O.name), xt.set(O, Dt)) } function Ht(O, _t) { const Dt = f.get(_t).get(O); u.get(_t) !== Dt && (i.uniformBlockBinding(_t, Dt, O.__bindingPointIndex), u.set(_t, Dt)) } function St() { i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, pt = null, mt = {}, g = {}, _ = new WeakMap, x = [], p = null, h = !1, A = null, v = null, y = null, U = null, P = null, R = null, q = null, S = new Yt(0, 0, 0), w = 0, J = !1, k = null, ut = null, N = null, W = null, Z = null, C.set(0, 0, i.canvas.width, i.canvas.height), b.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset() } return { buffers: { color: a, depth: c, stencil: l }, enable: rt, disable: G, bindFramebuffer: ot, drawBuffers: I, useProgram: yt, setBlending: st, setMaterial: vt, setFlipSided: F, setCullFace: m, setLineWidth: M, setPolygonOffset: H, setScissorTest: lt, activeTexture: ct, bindTexture: at, unbindTexture: wt, compressedTexImage2D: Tt, compressedTexImage3D: bt, texImage2D: Mt, texImage3D: gt, updateUBOMapping: Xt, uniformBlockBinding: Ht, texStorage2D: L, texStorage3D: ft, texSubImage2D: Lt, texSubImage3D: It, compressedTexSubImage2D: ht, compressedTexSubImage3D: Vt, scissor: Rt, viewport: kt, reset: St } } function Lp(i, t, e, n, r, s, o) { const a = r.isWebGL2, c = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), u = new WeakMap; let f; const d = new WeakMap; let g = !1; try { g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function _(m, M) { return g ? new OffscreenCanvas(m, M) : Ai("canvas") } function x(m, M, H, lt) { let ct = 1; if ((m.width > lt || m.height > lt) && (ct = lt / Math.max(m.width, m.height)), ct < 1 || M === !0) if (typeof HTMLImageElement < "u" && m instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && m instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && m instanceof ImageBitmap) { const at = M ? _r : Math.floor, wt = at(ct * m.width), Tt = at(ct * m.height); f === void 0 && (f = _(wt, Tt)); const bt = H ? _(wt, Tt) : f; return bt.width = wt, bt.height = Tt, bt.getContext("2d").drawImage(m, 0, 0, wt, Tt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + m.width + "x" + m.height + ") to (" + wt + "x" + Tt + ")."), bt } else return "data" in m && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + m.width + "x" + m.height + ")."), m; return m } function p(m) { return gs(m.width) && gs(m.height) } function h(m) { return a ? !1 : m.wrapS !== Oe || m.wrapT !== Oe || m.minFilter !== Me && m.minFilter !== ye } function A(m, M) { return m.generateMipmaps && M && m.minFilter !== Me && m.minFilter !== ye } function v(m) { i.generateMipmap(m) } function y(m, M, H, lt, ct = !1) { if (a === !1) return M; if (m !== null) { if (i[m] !== void 0) return i[m]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + m + "'") } let at = M; if (M === i.RED && (H === i.FLOAT && (at = i.R32F), H === i.HALF_FLOAT && (at = i.R16F), H === i.UNSIGNED_BYTE && (at = i.R8)), M === i.RED_INTEGER && (H === i.UNSIGNED_BYTE && (at = i.R8UI), H === i.UNSIGNED_SHORT && (at = i.R16UI), H === i.UNSIGNED_INT && (at = i.R32UI), H === i.BYTE && (at = i.R8I), H === i.SHORT && (at = i.R16I), H === i.INT && (at = i.R32I)), M === i.RG && (H === i.FLOAT && (at = i.RG32F), H === i.HALF_FLOAT && (at = i.RG16F), H === i.UNSIGNED_BYTE && (at = i.RG8)), M === i.RGBA) { const wt = ct ? dr : Zt.getTransfer(lt); H === i.FLOAT && (at = i.RGBA32F), H === i.HALF_FLOAT && (at = i.RGBA16F), H === i.UNSIGNED_BYTE && (at = wt === Jt ? i.SRGB8_ALPHA8 : i.RGBA8), H === i.UNSIGNED_SHORT_4_4_4_4 && (at = i.RGBA4), H === i.UNSIGNED_SHORT_5_5_5_1 && (at = i.RGB5_A1) } return (at === i.R16F || at === i.R32F || at === i.RG16F || at === i.RG32F || at === i.RGBA16F || at === i.RGBA32F) && t.get("EXT_color_buffer_float"), at } function U(m, M, H) { return A(m, H) === !0 || m.isFramebufferTexture && m.minFilter !== Me && m.minFilter !== ye ? Math.log2(Math.max(M.width, M.height)) + 1 : m.mipmaps !== void 0 && m.mipmaps.length > 0 ? m.mipmaps.length : m.isCompressedTexture && Array.isArray(m.image) ? M.mipmaps.length : 1 } function P(m) { return m === Me || m === Xs || m === Cr ? i.NEAREST : i.LINEAR } function R(m) { const M = m.target; M.removeEventListener("dispose", R), S(M), M.isVideoTexture && u.delete(M) } function q(m) { const M = m.target; M.removeEventListener("dispose", q), J(M) } function S(m) { const M = n.get(m); if (M.__webglInit === void 0) return; const H = m.source, lt = d.get(H); if (lt) { const ct = lt[M.__cacheKey]; ct.usedTimes--, ct.usedTimes === 0 && w(m), Object.keys(lt).length === 0 && d.delete(H) } n.remove(m) } function w(m) { const M = n.get(m); i.deleteTexture(M.__webglTexture); const H = m.source, lt = d.get(H); delete lt[M.__cacheKey], o.memory.textures-- } function J(m) { const M = m.texture, H = n.get(m), lt = n.get(M); if (lt.__webglTexture !== void 0 && (i.deleteTexture(lt.__webglTexture), o.memory.textures--), m.depthTexture && m.depthTexture.dispose(), m.isWebGLCubeRenderTarget) for (let ct = 0; ct < 6; ct++) { if (Array.isArray(H.__webglFramebuffer[ct])) for (let at = 0; at < H.__webglFramebuffer[ct].length; at++)i.deleteFramebuffer(H.__webglFramebuffer[ct][at]); else i.deleteFramebuffer(H.__webglFramebuffer[ct]); H.__webglDepthbuffer && i.deleteRenderbuffer(H.__webglDepthbuffer[ct]) } else { if (Array.isArray(H.__webglFramebuffer)) for (let ct = 0; ct < H.__webglFramebuffer.length; ct++)i.deleteFramebuffer(H.__webglFramebuffer[ct]); else i.deleteFramebuffer(H.__webglFramebuffer); if (H.__webglDepthbuffer && i.deleteRenderbuffer(H.__webglDepthbuffer), H.__webglMultisampledFramebuffer && i.deleteFramebuffer(H.__webglMultisampledFramebuffer), H.__webglColorRenderbuffer) for (let ct = 0; ct < H.__webglColorRenderbuffer.length; ct++)H.__webglColorRenderbuffer[ct] && i.deleteRenderbuffer(H.__webglColorRenderbuffer[ct]); H.__webglDepthRenderbuffer && i.deleteRenderbuffer(H.__webglDepthRenderbuffer) } if (m.isWebGLMultipleRenderTargets) for (let ct = 0, at = M.length; ct < at; ct++) { const wt = n.get(M[ct]); wt.__webglTexture && (i.deleteTexture(wt.__webglTexture), o.memory.textures--), n.remove(M[ct]) } n.remove(M), n.remove(m) } let k = 0; function ut() { k = 0 } function N() { const m = k; return m >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + m + " texture units while this GPU supports only " + r.maxTextures), k += 1, m } function W(m) { const M = []; return M.push(m.wrapS), M.push(m.wrapT), M.push(m.wrapR || 0), M.push(m.magFilter), M.push(m.minFilter), M.push(m.anisotropy), M.push(m.internalFormat), M.push(m.format), M.push(m.type), M.push(m.generateMipmaps), M.push(m.premultiplyAlpha), M.push(m.flipY), M.push(m.unpackAlignment), M.push(m.colorSpace), M.join() } function Z(m, M) { const H = n.get(m); if (m.isVideoTexture && vt(m), m.isRenderTargetTexture === !1 && m.version > 0 && H.__version !== m.version) { const lt = m.image; if (lt === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (lt.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { C(H, m, M); return } } e.bindTexture(i.TEXTURE_2D, H.__webglTexture, i.TEXTURE0 + M) } function j(m, M) { const H = n.get(m); if (m.version > 0 && H.__version !== m.version) { C(H, m, M); return } e.bindTexture(i.TEXTURE_2D_ARRAY, H.__webglTexture, i.TEXTURE0 + M) } function B(m, M) { const H = n.get(m); if (m.version > 0 && H.__version !== m.version) { C(H, m, M); return } e.bindTexture(i.TEXTURE_3D, H.__webglTexture, i.TEXTURE0 + M) } function it(m, M) { const H = n.get(m); if (m.version > 0 && H.__version !== m.version) { b(H, m, M); return } e.bindTexture(i.TEXTURE_CUBE_MAP, H.__webglTexture, i.TEXTURE0 + M) } const nt = { [li]: i.REPEAT, [Oe]: i.CLAMP_TO_EDGE, [ps]: i.MIRRORED_REPEAT }, pt = { [Me]: i.NEAREST, [Xs]: i.NEAREST_MIPMAP_NEAREST, [Cr]: i.NEAREST_MIPMAP_LINEAR, [ye]: i.LINEAR, [$c]: i.LINEAR_MIPMAP_NEAREST, [Ti]: i.LINEAR_MIPMAP_LINEAR }, mt = { [ul]: i.NEVER, [gl]: i.ALWAYS, [hl]: i.LESS, [Lo]: i.LEQUAL, [fl]: i.EQUAL, [ml]: i.GEQUAL, [dl]: i.GREATER, [pl]: i.NOTEQUAL }; function tt(m, M, H) { if (H ? (i.texParameteri(m, i.TEXTURE_WRAP_S, nt[M.wrapS]), i.texParameteri(m, i.TEXTURE_WRAP_T, nt[M.wrapT]), (m === i.TEXTURE_3D || m === i.TEXTURE_2D_ARRAY) && i.texParameteri(m, i.TEXTURE_WRAP_R, nt[M.wrapR]), i.texParameteri(m, i.TEXTURE_MAG_FILTER, pt[M.magFilter]), i.texParameteri(m, i.TEXTURE_MIN_FILTER, pt[M.minFilter])) : (i.texParameteri(m, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(m, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (m === i.TEXTURE_3D || m === i.TEXTURE_2D_ARRAY) && i.texParameteri(m, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (M.wrapS !== Oe || M.wrapT !== Oe) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(m, i.TEXTURE_MAG_FILTER, P(M.magFilter)), i.texParameteri(m, i.TEXTURE_MIN_FILTER, P(M.minFilter)), M.minFilter !== Me && M.minFilter !== ye && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), M.compareFunction && (i.texParameteri(m, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(m, i.TEXTURE_COMPARE_FUNC, mt[M.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) { const lt = t.get("EXT_texture_filter_anisotropic"); if (M.magFilter === Me || M.minFilter !== Cr && M.minFilter !== Ti || M.type === cn && t.has("OES_texture_float_linear") === !1 || a === !1 && M.type === bi && t.has("OES_texture_half_float_linear") === !1) return; (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (i.texParameterf(m, lt.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, r.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy) } } function D(m, M) { let H = !1; m.__webglInit === void 0 && (m.__webglInit = !0, M.addEventListener("dispose", R)); const lt = M.source; let ct = d.get(lt); ct === void 0 && (ct = {}, d.set(lt, ct)); const at = W(M); if (at !== m.__cacheKey) { ct[at] === void 0 && (ct[at] = { texture: i.createTexture(), usedTimes: 0 }, o.memory.textures++, H = !0), ct[at].usedTimes++; const wt = ct[m.__cacheKey]; wt !== void 0 && (ct[m.__cacheKey].usedTimes--, wt.usedTimes === 0 && w(M)), m.__cacheKey = at, m.__webglTexture = ct[at].texture } return H } function C(m, M, H) { let lt = i.TEXTURE_2D; (M.isDataArrayTexture || M.isCompressedArrayTexture) && (lt = i.TEXTURE_2D_ARRAY), M.isData3DTexture && (lt = i.TEXTURE_3D); const ct = D(m, M), at = M.source; e.bindTexture(lt, m.__webglTexture, i.TEXTURE0 + H); const wt = n.get(at); if (at.version !== wt.__version || ct === !0) { e.activeTexture(i.TEXTURE0 + H); const Tt = Zt.getPrimaries(Zt.workingColorSpace), bt = M.colorSpace === Pe ? null : Zt.getPrimaries(M.colorSpace), Lt = M.colorSpace === Pe || Tt === bt ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Lt); const It = h(M) && p(M.image) === !1; let ht = x(M.image, It, !1, r.maxTextureSize); ht = F(M, ht); const Vt = p(ht) || a, L = s.convert(M.format, M.colorSpace); let ft = s.convert(M.type), Mt = y(M.internalFormat, L, ft, M.colorSpace, M.isVideoTexture); tt(lt, M, Vt); let gt; const Rt = M.mipmaps, kt = a && M.isVideoTexture !== !0 && Mt !== Ro, Xt = wt.__version === void 0 || ct === !0, Ht = U(M, ht, Vt); if (M.isDepthTexture) Mt = i.DEPTH_COMPONENT, a ? M.type === cn ? Mt = i.DEPTH_COMPONENT32F : M.type === on ? Mt = i.DEPTH_COMPONENT24 : M.type === bn ? Mt = i.DEPTH24_STENCIL8 : Mt = i.DEPTH_COMPONENT16 : M.type === cn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === An && Mt === i.DEPTH_COMPONENT && M.type !== ys && M.type !== on && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = on, ft = s.convert(M.type)), M.format === ui && Mt === i.DEPTH_COMPONENT && (Mt = i.DEPTH_STENCIL, M.type !== bn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = bn, ft = s.convert(M.type))), Xt && (kt ? e.texStorage2D(i.TEXTURE_2D, 1, Mt, ht.width, ht.height) : e.texImage2D(i.TEXTURE_2D, 0, Mt, ht.width, ht.height, 0, L, ft, null)); else if (M.isDataTexture) if (Rt.length > 0 && Vt) { kt && Xt && e.texStorage2D(i.TEXTURE_2D, Ht, Mt, Rt[0].width, Rt[0].height); for (let St = 0, O = Rt.length; St < O; St++)gt = Rt[St], kt ? e.texSubImage2D(i.TEXTURE_2D, St, 0, 0, gt.width, gt.height, L, ft, gt.data) : e.texImage2D(i.TEXTURE_2D, St, Mt, gt.width, gt.height, 0, L, ft, gt.data); M.generateMipmaps = !1 } else kt ? (Xt && e.texStorage2D(i.TEXTURE_2D, Ht, Mt, ht.width, ht.height), e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ht.width, ht.height, L, ft, ht.data)) : e.texImage2D(i.TEXTURE_2D, 0, Mt, ht.width, ht.height, 0, L, ft, ht.data); else if (M.isCompressedTexture) if (M.isCompressedArrayTexture) { kt && Xt && e.texStorage3D(i.TEXTURE_2D_ARRAY, Ht, Mt, Rt[0].width, Rt[0].height, ht.depth); for (let St = 0, O = Rt.length; St < O; St++)gt = Rt[St], M.format !== Fe ? L !== null ? kt ? e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, St, 0, 0, 0, gt.width, gt.height, ht.depth, L, gt.data, 0, 0) : e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, St, Mt, gt.width, gt.height, ht.depth, 0, gt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : kt ? e.texSubImage3D(i.TEXTURE_2D_ARRAY, St, 0, 0, 0, gt.width, gt.height, ht.depth, L, ft, gt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, St, Mt, gt.width, gt.height, ht.depth, 0, L, ft, gt.data) } else { kt && Xt && e.texStorage2D(i.TEXTURE_2D, Ht, Mt, Rt[0].width, Rt[0].height); for (let St = 0, O = Rt.length; St < O; St++)gt = Rt[St], M.format !== Fe ? L !== null ? kt ? e.compressedTexSubImage2D(i.TEXTURE_2D, St, 0, 0, gt.width, gt.height, L, gt.data) : e.compressedTexImage2D(i.TEXTURE_2D, St, Mt, gt.width, gt.height, 0, gt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : kt ? e.texSubImage2D(i.TEXTURE_2D, St, 0, 0, gt.width, gt.height, L, ft, gt.data) : e.texImage2D(i.TEXTURE_2D, St, Mt, gt.width, gt.height, 0, L, ft, gt.data) } else if (M.isDataArrayTexture) kt ? (Xt && e.texStorage3D(i.TEXTURE_2D_ARRAY, Ht, Mt, ht.width, ht.height, ht.depth), e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ht.width, ht.height, ht.depth, L, ft, ht.data)) : e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Mt, ht.width, ht.height, ht.depth, 0, L, ft, ht.data); else if (M.isData3DTexture) kt ? (Xt && e.texStorage3D(i.TEXTURE_3D, Ht, Mt, ht.width, ht.height, ht.depth), e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ht.width, ht.height, ht.depth, L, ft, ht.data)) : e.texImage3D(i.TEXTURE_3D, 0, Mt, ht.width, ht.height, ht.depth, 0, L, ft, ht.data); else if (M.isFramebufferTexture) { if (Xt) if (kt) e.texStorage2D(i.TEXTURE_2D, Ht, Mt, ht.width, ht.height); else { let St = ht.width, O = ht.height; for (let _t = 0; _t < Ht; _t++)e.texImage2D(i.TEXTURE_2D, _t, Mt, St, O, 0, L, ft, null), St >>= 1, O >>= 1 } } else if (Rt.length > 0 && Vt) { kt && Xt && e.texStorage2D(i.TEXTURE_2D, Ht, Mt, Rt[0].width, Rt[0].height); for (let St = 0, O = Rt.length; St < O; St++)gt = Rt[St], kt ? e.texSubImage2D(i.TEXTURE_2D, St, 0, 0, L, ft, gt) : e.texImage2D(i.TEXTURE_2D, St, Mt, L, ft, gt); M.generateMipmaps = !1 } else kt ? (Xt && e.texStorage2D(i.TEXTURE_2D, Ht, Mt, ht.width, ht.height), e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, L, ft, ht)) : e.texImage2D(i.TEXTURE_2D, 0, Mt, L, ft, ht); A(M, Vt) && v(lt), wt.__version = at.version, M.onUpdate && M.onUpdate(M) } m.__version = M.version } function b(m, M, H) { if (M.image.length !== 6) return; const lt = D(m, M), ct = M.source; e.bindTexture(i.TEXTURE_CUBE_MAP, m.__webglTexture, i.TEXTURE0 + H); const at = n.get(ct); if (ct.version !== at.__version || lt === !0) { e.activeTexture(i.TEXTURE0 + H); const wt = Zt.getPrimaries(Zt.workingColorSpace), Tt = M.colorSpace === Pe ? null : Zt.getPrimaries(M.colorSpace), bt = M.colorSpace === Pe || wt === Tt ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, bt); const Lt = M.isCompressedTexture || M.image[0].isCompressedTexture, It = M.image[0] && M.image[0].isDataTexture, ht = []; for (let St = 0; St < 6; St++)!Lt && !It ? ht[St] = x(M.image[St], !1, !0, r.maxCubemapSize) : ht[St] = It ? M.image[St].image : M.image[St], ht[St] = F(M, ht[St]); const Vt = ht[0], L = p(Vt) || a, ft = s.convert(M.format, M.colorSpace), Mt = s.convert(M.type), gt = y(M.internalFormat, ft, Mt, M.colorSpace), Rt = a && M.isVideoTexture !== !0, kt = at.__version === void 0 || lt === !0; let Xt = U(M, Vt, L); tt(i.TEXTURE_CUBE_MAP, M, L); let Ht; if (Lt) { Rt && kt && e.texStorage2D(i.TEXTURE_CUBE_MAP, Xt, gt, Vt.width, Vt.height); for (let St = 0; St < 6; St++) { Ht = ht[St].mipmaps; for (let O = 0; O < Ht.length; O++) { const _t = Ht[O]; M.format !== Fe ? ft !== null ? Rt ? e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O, 0, 0, _t.width, _t.height, ft, _t.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O, gt, _t.width, _t.height, 0, _t.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Rt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O, 0, 0, _t.width, _t.height, ft, Mt, _t.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O, gt, _t.width, _t.height, 0, ft, Mt, _t.data) } } } else { Ht = M.mipmaps, Rt && kt && (Ht.length > 0 && Xt++, e.texStorage2D(i.TEXTURE_CUBE_MAP, Xt, gt, ht[0].width, ht[0].height)); for (let St = 0; St < 6; St++)if (It) { Rt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, 0, 0, 0, ht[St].width, ht[St].height, ft, Mt, ht[St].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, 0, gt, ht[St].width, ht[St].height, 0, ft, Mt, ht[St].data); for (let O = 0; O < Ht.length; O++) { const xt = Ht[O].image[St].image; Rt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O + 1, 0, 0, xt.width, xt.height, ft, Mt, xt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O + 1, gt, xt.width, xt.height, 0, ft, Mt, xt.data) } } else { Rt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, 0, 0, 0, ft, Mt, ht[St]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, 0, gt, ft, Mt, ht[St]); for (let O = 0; O < Ht.length; O++) { const _t = Ht[O]; Rt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O + 1, 0, 0, ft, Mt, _t.image[St]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + St, O + 1, gt, ft, Mt, _t.image[St]) } } } A(M, L) && v(i.TEXTURE_CUBE_MAP), at.__version = ct.version, M.onUpdate && M.onUpdate(M) } m.__version = M.version } function E(m, M, H, lt, ct, at) { const wt = s.convert(H.format, H.colorSpace), Tt = s.convert(H.type), bt = y(H.internalFormat, wt, Tt, H.colorSpace); if (!n.get(M).__hasExternalTextures) { const It = Math.max(1, M.width >> at), ht = Math.max(1, M.height >> at); ct === i.TEXTURE_3D || ct === i.TEXTURE_2D_ARRAY ? e.texImage3D(ct, at, bt, It, ht, M.depth, 0, wt, Tt, null) : e.texImage2D(ct, at, bt, It, ht, 0, wt, Tt, null) } e.bindFramebuffer(i.FRAMEBUFFER, m), st(M) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, lt, ct, n.get(H).__webglTexture, 0, et(M)) : (ct === i.TEXTURE_2D || ct >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ct <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, lt, ct, n.get(H).__webglTexture, at), e.bindFramebuffer(i.FRAMEBUFFER, null) } function Y(m, M, H) { if (i.bindRenderbuffer(i.RENDERBUFFER, m), M.depthBuffer && !M.stencilBuffer) { let lt = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16; if (H || st(M)) { const ct = M.depthTexture; ct && ct.isDepthTexture && (ct.type === cn ? lt = i.DEPTH_COMPONENT32F : ct.type === on && (lt = i.DEPTH_COMPONENT24)); const at = et(M); st(M) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, at, lt, M.width, M.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, at, lt, M.width, M.height) } else i.renderbufferStorage(i.RENDERBUFFER, lt, M.width, M.height); i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, m) } else if (M.depthBuffer && M.stencilBuffer) { const lt = et(M); H && st(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, lt, i.DEPTH24_STENCIL8, M.width, M.height) : st(M) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, lt, i.DEPTH24_STENCIL8, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, m) } else { const lt = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture]; for (let ct = 0; ct < lt.length; ct++) { const at = lt[ct], wt = s.convert(at.format, at.colorSpace), Tt = s.convert(at.type), bt = y(at.internalFormat, wt, Tt, at.colorSpace), Lt = et(M); H && st(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Lt, bt, M.width, M.height) : st(M) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Lt, bt, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, bt, M.width, M.height) } } i.bindRenderbuffer(i.RENDERBUFFER, null) } function rt(m, M) { if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (e.bindFramebuffer(i.FRAMEBUFFER, m), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), Z(M.depthTexture, 0); const lt = n.get(M.depthTexture).__webglTexture, ct = et(M); if (M.depthTexture.format === An) st(M) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, lt, 0, ct) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, lt, 0); else if (M.depthTexture.format === ui) st(M) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, lt, 0, ct) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, lt, 0); else throw new Error("Unknown depthTexture format") } function G(m) { const M = n.get(m), H = m.isWebGLCubeRenderTarget === !0; if (m.depthTexture && !M.__autoAllocateDepthBuffer) { if (H) throw new Error("target.depthTexture not supported in Cube render targets"); rt(M.__webglFramebuffer, m) } else if (H) { M.__webglDepthbuffer = []; for (let lt = 0; lt < 6; lt++)e.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer[lt]), M.__webglDepthbuffer[lt] = i.createRenderbuffer(), Y(M.__webglDepthbuffer[lt], m, !1) } else e.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer = i.createRenderbuffer(), Y(M.__webglDepthbuffer, m, !1); e.bindFramebuffer(i.FRAMEBUFFER, null) } function ot(m, M, H) { const lt = n.get(m); M !== void 0 && E(lt.__webglFramebuffer, m, m.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), H !== void 0 && G(m) } function I(m) { const M = m.texture, H = n.get(m), lt = n.get(M); m.addEventListener("dispose", q), m.isWebGLMultipleRenderTargets !== !0 && (lt.__webglTexture === void 0 && (lt.__webglTexture = i.createTexture()), lt.__version = M.version, o.memory.textures++); const ct = m.isWebGLCubeRenderTarget === !0, at = m.isWebGLMultipleRenderTargets === !0, wt = p(m) || a; if (ct) { H.__webglFramebuffer = []; for (let Tt = 0; Tt < 6; Tt++)if (a && M.mipmaps && M.mipmaps.length > 0) { H.__webglFramebuffer[Tt] = []; for (let bt = 0; bt < M.mipmaps.length; bt++)H.__webglFramebuffer[Tt][bt] = i.createFramebuffer() } else H.__webglFramebuffer[Tt] = i.createFramebuffer() } else { if (a && M.mipmaps && M.mipmaps.length > 0) { H.__webglFramebuffer = []; for (let Tt = 0; Tt < M.mipmaps.length; Tt++)H.__webglFramebuffer[Tt] = i.createFramebuffer() } else H.__webglFramebuffer = i.createFramebuffer(); if (at) if (r.drawBuffers) { const Tt = m.texture; for (let bt = 0, Lt = Tt.length; bt < Lt; bt++) { const It = n.get(Tt[bt]); It.__webglTexture === void 0 && (It.__webglTexture = i.createTexture(), o.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."); if (a && m.samples > 0 && st(m) === !1) { const Tt = at ? M : [M]; H.__webglMultisampledFramebuffer = i.createFramebuffer(), H.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, H.__webglMultisampledFramebuffer); for (let bt = 0; bt < Tt.length; bt++) { const Lt = Tt[bt]; H.__webglColorRenderbuffer[bt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, H.__webglColorRenderbuffer[bt]); const It = s.convert(Lt.format, Lt.colorSpace), ht = s.convert(Lt.type), Vt = y(Lt.internalFormat, It, ht, Lt.colorSpace, m.isXRRenderTarget === !0), L = et(m); i.renderbufferStorageMultisample(i.RENDERBUFFER, L, Vt, m.width, m.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + bt, i.RENDERBUFFER, H.__webglColorRenderbuffer[bt]) } i.bindRenderbuffer(i.RENDERBUFFER, null), m.depthBuffer && (H.__webglDepthRenderbuffer = i.createRenderbuffer(), Y(H.__webglDepthRenderbuffer, m, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null) } } if (ct) { e.bindTexture(i.TEXTURE_CUBE_MAP, lt.__webglTexture), tt(i.TEXTURE_CUBE_MAP, M, wt); for (let Tt = 0; Tt < 6; Tt++)if (a && M.mipmaps && M.mipmaps.length > 0) for (let bt = 0; bt < M.mipmaps.length; bt++)E(H.__webglFramebuffer[Tt][bt], m, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, bt); else E(H.__webglFramebuffer[Tt], m, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, 0); A(M, wt) && v(i.TEXTURE_CUBE_MAP), e.unbindTexture() } else if (at) { const Tt = m.texture; for (let bt = 0, Lt = Tt.length; bt < Lt; bt++) { const It = Tt[bt], ht = n.get(It); e.bindTexture(i.TEXTURE_2D, ht.__webglTexture), tt(i.TEXTURE_2D, It, wt), E(H.__webglFramebuffer, m, It, i.COLOR_ATTACHMENT0 + bt, i.TEXTURE_2D, 0), A(It, wt) && v(i.TEXTURE_2D) } e.unbindTexture() } else { let Tt = i.TEXTURE_2D; if ((m.isWebGL3DRenderTarget || m.isWebGLArrayRenderTarget) && (a ? Tt = m.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), e.bindTexture(Tt, lt.__webglTexture), tt(Tt, M, wt), a && M.mipmaps && M.mipmaps.length > 0) for (let bt = 0; bt < M.mipmaps.length; bt++)E(H.__webglFramebuffer[bt], m, M, i.COLOR_ATTACHMENT0, Tt, bt); else E(H.__webglFramebuffer, m, M, i.COLOR_ATTACHMENT0, Tt, 0); A(M, wt) && v(Tt), e.unbindTexture() } m.depthBuffer && G(m) } function yt(m) { const M = p(m) || a, H = m.isWebGLMultipleRenderTargets === !0 ? m.texture : [m.texture]; for (let lt = 0, ct = H.length; lt < ct; lt++) { const at = H[lt]; if (A(at, M)) { const wt = m.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, Tt = n.get(at).__webglTexture; e.bindTexture(wt, Tt), v(wt), e.unbindTexture() } } } function X(m) { if (a && m.samples > 0 && st(m) === !1) { const M = m.isWebGLMultipleRenderTargets ? m.texture : [m.texture], H = m.width, lt = m.height; let ct = i.COLOR_BUFFER_BIT; const at = [], wt = m.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Tt = n.get(m), bt = m.isWebGLMultipleRenderTargets === !0; if (bt) for (let Lt = 0; Lt < M.length; Lt++)e.bindFramebuffer(i.FRAMEBUFFER, Tt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Lt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, Tt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Lt, i.TEXTURE_2D, null, 0); e.bindFramebuffer(i.READ_FRAMEBUFFER, Tt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Tt.__webglFramebuffer); for (let Lt = 0; Lt < M.length; Lt++) { at.push(i.COLOR_ATTACHMENT0 + Lt), m.depthBuffer && at.push(wt); const It = Tt.__ignoreDepthValues !== void 0 ? Tt.__ignoreDepthValues : !1; if (It === !1 && (m.depthBuffer && (ct |= i.DEPTH_BUFFER_BIT), m.stencilBuffer && (ct |= i.STENCIL_BUFFER_BIT)), bt && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Tt.__webglColorRenderbuffer[Lt]), It === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [wt]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [wt])), bt) { const ht = n.get(M[Lt]).__webglTexture; i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ht, 0) } i.blitFramebuffer(0, 0, H, lt, 0, 0, H, lt, ct, i.NEAREST), l && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, at) } if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), bt) for (let Lt = 0; Lt < M.length; Lt++) { e.bindFramebuffer(i.FRAMEBUFFER, Tt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Lt, i.RENDERBUFFER, Tt.__webglColorRenderbuffer[Lt]); const It = n.get(M[Lt]).__webglTexture; e.bindFramebuffer(i.FRAMEBUFFER, Tt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Lt, i.TEXTURE_2D, It, 0) } e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Tt.__webglMultisampledFramebuffer) } } function et(m) { return Math.min(r.maxSamples, m.samples) } function st(m) { const M = n.get(m); return a && m.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1 } function vt(m) { const M = o.render.frame; u.get(m) !== M && (u.set(m, M), m.update()) } function F(m, M) { const H = m.colorSpace, lt = m.format, ct = m.type; return m.isCompressedTexture === !0 || m.isVideoTexture === !0 || m.format === ms || H !== Qe && H !== Pe && (Zt.getTransfer(H) === Jt ? a === !1 ? t.has("EXT_sRGB") === !0 && lt === Fe ? (m.format = ms, m.minFilter = ye, m.generateMipmaps = !1) : M = Uo.sRGBToLinear(M) : (lt !== Fe || ct !== hn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", H)), M } this.allocateTextureUnit = N, this.resetTextureUnits = ut, this.setTexture2D = Z, this.setTexture2DArray = j, this.setTexture3D = B, this.setTextureCube = it, this.rebindTextures = ot, this.setupRenderTarget = I, this.updateRenderTargetMipmap = yt, this.updateMultisampleRenderTarget = X, this.setupDepthRenderbuffer = G, this.setupFrameBufferTexture = E, this.useMultisampledRTT = st } function Dp(i, t, e) { const n = e.isWebGL2; function r(s, o = Pe) { let a; const c = Zt.getTransfer(o); if (s === hn) return i.UNSIGNED_BYTE; if (s === Eo) return i.UNSIGNED_SHORT_4_4_4_4; if (s === To) return i.UNSIGNED_SHORT_5_5_5_1; if (s === Qc) return i.BYTE; if (s === tl) return i.SHORT; if (s === ys) return i.UNSIGNED_SHORT; if (s === yo) return i.INT; if (s === on) return i.UNSIGNED_INT; if (s === cn) return i.FLOAT; if (s === bi) return n ? i.HALF_FLOAT : (a = t.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (s === el) return i.ALPHA; if (s === Fe) return i.RGBA; if (s === nl) return i.LUMINANCE; if (s === il) return i.LUMINANCE_ALPHA; if (s === An) return i.DEPTH_COMPONENT; if (s === ui) return i.DEPTH_STENCIL; if (s === ms) return a = t.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null; if (s === rl) return i.RED; if (s === bo) return i.RED_INTEGER; if (s === sl) return i.RG; if (s === Ao) return i.RG_INTEGER; if (s === wo) return i.RGBA_INTEGER; if (s === Pr || s === Lr || s === Dr || s === Ur) if (c === Jt) if (a = t.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (s === Pr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (s === Lr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (s === Dr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (s === Ur) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (a = t.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (s === Pr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT; if (s === Lr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (s === Dr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (s === Ur) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (s === qs || s === Ys || s === js || s === Zs) if (a = t.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (s === qs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (s === Ys) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (s === js) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (s === Zs) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (s === Ro) return a = t.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (s === Ks || s === Js) if (a = t.get("WEBGL_compressed_texture_etc"), a !== null) { if (s === Ks) return c === Jt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (s === Js) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (s === $s || s === Qs || s === ta || s === ea || s === na || s === ia || s === ra || s === sa || s === aa || s === oa || s === ca || s === la || s === ua || s === ha) if (a = t.get("WEBGL_compressed_texture_astc"), a !== null) { if (s === $s) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (s === Qs) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR; if (s === ta) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (s === ea) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR; if (s === na) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (s === ia) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR; if (s === ra) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (s === sa) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR; if (s === aa) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (s === oa) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR; if (s === ca) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (s === la) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR; if (s === ua) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (s === ha) return c === Jt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (s === Ir || s === fa || s === da) if (a = t.get("EXT_texture_compression_bptc"), a !== null) { if (s === Ir) return c === Jt ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (s === fa) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (s === da) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (s === al || s === pa || s === ma || s === ga) if (a = t.get("EXT_texture_compression_rgtc"), a !== null) { if (s === Ir) return a.COMPRESSED_RED_RGTC1_EXT; if (s === pa) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (s === ma) return a.COMPRESSED_RED_GREEN_RGTC2_EXT; if (s === ga) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return s === bn ? n ? i.UNSIGNED_INT_24_8 : (a = t.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null } return { convert: r } } class Up extends we { constructor(t = []) { super(), this.isArrayCamera = !0, this.cameras = t } } class sr extends fe { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const Ip = { type: "move" }; class is { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new sr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new sr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new z, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new z), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new sr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new z, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new z), this._grip } dispatchEvent(t) { return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this } connect(t) { if (t && t.hand) { const e = this._hand; if (e) for (const n of t.hand.values()) this._getHandJoint(e, n) } return this.dispatchEvent({ type: "connected", data: t }), this } disconnect(t) { return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(t, e, n) { let r = null, s = null, o = null; const a = this._targetRay, c = this._grip, l = this._hand; if (t && e.session.visibilityState !== "visible-blurred") { if (l && t.hand) { o = !0; for (const x of t.hand.values()) { const p = e.getJointPose(x, n), h = this._getHandJoint(l, x); p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null } const u = l.joints["index-finger-tip"], f = l.joints["thumb-tip"], d = u.position.distanceTo(f.position), g = .02, _ = .005; l.inputState.pinching && d > g + _ ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && d <= g - _ && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this })) } else c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1)); a !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ip))) } return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this } _getHandJoint(t, e) { if (t.joints[e.jointName] === void 0) { const n = new sr; n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n) } return t.joints[e.jointName] } } class Np extends Dn { constructor(t, e) { super(); const n = this; let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, u = null, f = null, d = null, g = null, _ = null; const x = e.getContextAttributes(); let p = null, h = null; const A = [], v = [], y = new dt; let U = null; const P = new we; P.layers.enable(1), P.viewport = new he; const R = new we; R.layers.enable(2), R.viewport = new he; const q = [P, R], S = new Up; S.layers.enable(1), S.layers.enable(2); let w = null, J = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (tt) { let D = A[tt]; return D === void 0 && (D = new is, A[tt] = D), D.getTargetRaySpace() }, this.getControllerGrip = function (tt) { let D = A[tt]; return D === void 0 && (D = new is, A[tt] = D), D.getGripSpace() }, this.getHand = function (tt) { let D = A[tt]; return D === void 0 && (D = new is, A[tt] = D), D.getHandSpace() }; function k(tt) { const D = v.indexOf(tt.inputSource); if (D === -1) return; const C = A[D]; C !== void 0 && (C.update(tt.inputSource, tt.frame, l || o), C.dispatchEvent({ type: tt.type, data: tt.inputSource })) } function ut() { r.removeEventListener("select", k), r.removeEventListener("selectstart", k), r.removeEventListener("selectend", k), r.removeEventListener("squeeze", k), r.removeEventListener("squeezestart", k), r.removeEventListener("squeezeend", k), r.removeEventListener("end", ut), r.removeEventListener("inputsourceschange", N); for (let tt = 0; tt < A.length; tt++) { const D = v[tt]; D !== null && (v[tt] = null, A[tt].disconnect(D)) } w = null, J = null, t.setRenderTarget(p), g = null, d = null, f = null, r = null, h = null, mt.stop(), n.isPresenting = !1, t.setPixelRatio(U), t.setSize(y.width, y.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (tt) { s = tt, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (tt) { a = tt, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return l || o }, this.setReferenceSpace = function (tt) { l = tt }, this.getBaseLayer = function () { return d !== null ? d : g }, this.getBinding = function () { return f }, this.getFrame = function () { return _ }, this.getSession = function () { return r }, this.setSession = async function (tt) { if (r = tt, r !== null) { if (p = t.getRenderTarget(), r.addEventListener("select", k), r.addEventListener("selectstart", k), r.addEventListener("selectend", k), r.addEventListener("squeeze", k), r.addEventListener("squeezestart", k), r.addEventListener("squeezeend", k), r.addEventListener("end", ut), r.addEventListener("inputsourceschange", N), x.xrCompatible !== !0 && await e.makeXRCompatible(), U = t.getPixelRatio(), t.getSize(y), r.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1) { const D = { antialias: r.renderState.layers === void 0 ? x.antialias : !0, alpha: !0, depth: x.depth, stencil: x.stencil, framebufferScaleFactor: s }; g = new XRWebGLLayer(r, e, D), r.updateRenderState({ baseLayer: g }), t.setPixelRatio(1), t.setSize(g.framebufferWidth, g.framebufferHeight, !1), h = new Rn(g.framebufferWidth, g.framebufferHeight, { format: Fe, type: hn, colorSpace: t.outputColorSpace, stencilBuffer: x.stencil }) } else { let D = null, C = null, b = null; x.depth && (b = x.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, D = x.stencil ? ui : An, C = x.stencil ? bn : on); const E = { colorFormat: e.RGBA8, depthFormat: b, scaleFactor: s }; f = new XRWebGLBinding(r, e), d = f.createProjectionLayer(E), r.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, !1), h = new Rn(d.textureWidth, d.textureHeight, { format: Fe, type: hn, depthTexture: new Yo(d.textureWidth, d.textureHeight, C, void 0, void 0, void 0, void 0, void 0, void 0, D), stencilBuffer: x.stencil, colorSpace: t.outputColorSpace, samples: x.antialias ? 4 : 0 }); const Y = t.properties.get(h); Y.__ignoreDepthValues = d.ignoreDepthValues } h.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), mt.setContext(r), mt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (r !== null) return r.environmentBlendMode }; function N(tt) { for (let D = 0; D < tt.removed.length; D++) { const C = tt.removed[D], b = v.indexOf(C); b >= 0 && (v[b] = null, A[b].disconnect(C)) } for (let D = 0; D < tt.added.length; D++) { const C = tt.added[D]; let b = v.indexOf(C); if (b === -1) { for (let Y = 0; Y < A.length; Y++)if (Y >= v.length) { v.push(C), b = Y; break } else if (v[Y] === null) { v[Y] = C, b = Y; break } if (b === -1) break } const E = A[b]; E && E.connect(C) } } const W = new z, Z = new z; function j(tt, D, C) { W.setFromMatrixPosition(D.matrixWorld), Z.setFromMatrixPosition(C.matrixWorld); const b = W.distanceTo(Z), E = D.projectionMatrix.elements, Y = C.projectionMatrix.elements, rt = E[14] / (E[10] - 1), G = E[14] / (E[10] + 1), ot = (E[9] + 1) / E[5], I = (E[9] - 1) / E[5], yt = (E[8] - 1) / E[0], X = (Y[8] + 1) / Y[0], et = rt * yt, st = rt * X, vt = b / (-yt + X), F = vt * -yt; D.matrixWorld.decompose(tt.position, tt.quaternion, tt.scale), tt.translateX(F), tt.translateZ(vt), tt.matrixWorld.compose(tt.position, tt.quaternion, tt.scale), tt.matrixWorldInverse.copy(tt.matrixWorld).invert(); const m = rt + vt, M = G + vt, H = et - F, lt = st + (b - F), ct = ot * G / M * m, at = I * G / M * m; tt.projectionMatrix.makePerspective(H, lt, ct, at, m, M), tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert() } function B(tt, D) { D === null ? tt.matrixWorld.copy(tt.matrix) : tt.matrixWorld.multiplyMatrices(D.matrixWorld, tt.matrix), tt.matrixWorldInverse.copy(tt.matrixWorld).invert() } this.updateCamera = function (tt) { if (r === null) return; S.near = R.near = P.near = tt.near, S.far = R.far = P.far = tt.far, (w !== S.near || J !== S.far) && (r.updateRenderState({ depthNear: S.near, depthFar: S.far }), w = S.near, J = S.far); const D = tt.parent, C = S.cameras; B(S, D); for (let b = 0; b < C.length; b++)B(C[b], D); C.length === 2 ? j(S, P, R) : S.projectionMatrix.copy(P.projectionMatrix), it(tt, S, D) }; function it(tt, D, C) { C === null ? tt.matrix.copy(D.matrixWorld) : (tt.matrix.copy(C.matrixWorld), tt.matrix.invert(), tt.matrix.multiply(D.matrixWorld)), tt.matrix.decompose(tt.position, tt.quaternion, tt.scale), tt.updateMatrixWorld(!0), tt.projectionMatrix.copy(D.projectionMatrix), tt.projectionMatrixInverse.copy(D.projectionMatrixInverse), tt.isPerspectiveCamera && (tt.fov = hi * 2 * Math.atan(1 / tt.projectionMatrix.elements[5]), tt.zoom = 1) } this.getCamera = function () { return S }, this.getFoveation = function () { if (!(d === null && g === null)) return c }, this.setFoveation = function (tt) { c = tt, d !== null && (d.fixedFoveation = tt), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = tt) }; let nt = null; function pt(tt, D) { if (u = D.getViewerPose(l || o), _ = D, u !== null) { const C = u.views; g !== null && (t.setRenderTargetFramebuffer(h, g.framebuffer), t.setRenderTarget(h)); let b = !1; C.length !== S.cameras.length && (S.cameras.length = 0, b = !0); for (let E = 0; E < C.length; E++) { const Y = C[E]; let rt = null; if (g !== null) rt = g.getViewport(Y); else { const ot = f.getViewSubImage(d, Y); rt = ot.viewport, E === 0 && (t.setRenderTargetTextures(h, ot.colorTexture, d.ignoreDepthValues ? void 0 : ot.depthStencilTexture), t.setRenderTarget(h)) } let G = q[E]; G === void 0 && (G = new we, G.layers.enable(E), G.viewport = new he, q[E] = G), G.matrix.fromArray(Y.transform.matrix), G.matrix.decompose(G.position, G.quaternion, G.scale), G.projectionMatrix.fromArray(Y.projectionMatrix), G.projectionMatrixInverse.copy(G.projectionMatrix).invert(), G.viewport.set(rt.x, rt.y, rt.width, rt.height), E === 0 && (S.matrix.copy(G.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), b === !0 && S.cameras.push(G) } } for (let C = 0; C < A.length; C++) { const b = v[C], E = A[C]; b !== null && E !== void 0 && E.update(b, D, l || o) } nt && nt(tt, D), D.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: D }), _ = null } const mt = new Xo; mt.setAnimationLoop(pt), this.setAnimationLoop = function (tt) { nt = tt }, this.dispose = function () { } } } function Op(i, t) { function e(p, h) { p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix) } function n(p, h) { h.color.getRGB(p.fogColor.value, Vo(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density) } function r(p, h, A, v, y) { h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), f(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), d(p, h), h.isMeshPhysicalMaterial && g(p, h, y)) : h.isMeshMatcapMaterial ? (s(p, h), _(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), x(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? c(p, h, A, v) : h.isSpriteMaterial ? l(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1) } function s(p, h) { p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, e(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === Ee && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, e(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === Ee && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, e(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, e(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest); const A = t.get(h).envMap; if (A && (p.envMap.value = A, p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) { p.lightMap.value = h.lightMap; const v = i._useLegacyLights === !0 ? Math.PI : 1; p.lightMapIntensity.value = h.lightMapIntensity * v, e(h.lightMap, p.lightMapTransform) } h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, p.aoMapTransform)) } function o(p, h) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)) } function a(p, h) { p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale } function c(p, h, A, v) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * A, p.scale.value = v * .5, h.map && (p.map.value = h.map, e(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest) } function l(p, h) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest) } function u(p, h) { p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4) } function f(p, h) { h.gradientMap && (p.gradientMap.value = h.gradientMap) } function d(p, h) { p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, p.roughnessMapTransform)), t.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity) } function g(p, h, A) { p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Ee && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, p.specularIntensityMapTransform)) } function _(p, h) { h.matcap && (p.matcap.value = h.matcap) } function x(p, h) { const A = t.get(h).light; p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: r } } function Fp(i, t, e, n) { let r = {}, s = {}, o = []; const a = e.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0; function c(A, v) { const y = v.program; n.uniformBlockBinding(A, y) } function l(A, v) { let y = r[A.id]; y === void 0 && (_(A), y = u(A), r[A.id] = y, A.addEventListener("dispose", p)); const U = v.program; n.updateUBOMapping(A, U); const P = t.render.frame; s[A.id] !== P && (d(A), s[A.id] = P) } function u(A) { const v = f(); A.__bindingPointIndex = v; const y = i.createBuffer(), U = A.__size, P = A.usage; return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, U, P), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, v, y), y } function f() { for (let A = 0; A < a; A++)if (o.indexOf(A) === -1) return o.push(A), A; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(A) { const v = r[A.id], y = A.uniforms, U = A.__cache; i.bindBuffer(i.UNIFORM_BUFFER, v); for (let P = 0, R = y.length; P < R; P++) { const q = Array.isArray(y[P]) ? y[P] : [y[P]]; for (let S = 0, w = q.length; S < w; S++) { const J = q[S]; if (g(J, P, S, U) === !0) { const k = J.__offset, ut = Array.isArray(J.value) ? J.value : [J.value]; let N = 0; for (let W = 0; W < ut.length; W++) { const Z = ut[W], j = x(Z); typeof Z == "number" || typeof Z == "boolean" ? (J.__data[0] = Z, i.bufferSubData(i.UNIFORM_BUFFER, k + N, J.__data)) : Z.isMatrix3 ? (J.__data[0] = Z.elements[0], J.__data[1] = Z.elements[1], J.__data[2] = Z.elements[2], J.__data[3] = 0, J.__data[4] = Z.elements[3], J.__data[5] = Z.elements[4], J.__data[6] = Z.elements[5], J.__data[7] = 0, J.__data[8] = Z.elements[6], J.__data[9] = Z.elements[7], J.__data[10] = Z.elements[8], J.__data[11] = 0) : (Z.toArray(J.__data, N), N += j.storage / Float32Array.BYTES_PER_ELEMENT) } i.bufferSubData(i.UNIFORM_BUFFER, k, J.__data) } } } i.bindBuffer(i.UNIFORM_BUFFER, null) } function g(A, v, y, U) { const P = A.value, R = v + "_" + y; if (U[R] === void 0) return typeof P == "number" || typeof P == "boolean" ? U[R] = P : U[R] = P.clone(), !0; { const q = U[R]; if (typeof P == "number" || typeof P == "boolean") { if (q !== P) return U[R] = P, !0 } else if (q.equals(P) === !1) return q.copy(P), !0 } return !1 } function _(A) { const v = A.uniforms; let y = 0; const U = 16; for (let R = 0, q = v.length; R < q; R++) { const S = Array.isArray(v[R]) ? v[R] : [v[R]]; for (let w = 0, J = S.length; w < J; w++) { const k = S[w], ut = Array.isArray(k.value) ? k.value : [k.value]; for (let N = 0, W = ut.length; N < W; N++) { const Z = ut[N], j = x(Z), B = y % U; B !== 0 && U - B < j.boundary && (y += U - B), k.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = y, y += j.storage } } } const P = y % U; return P > 0 && (y += U - P), A.__size = y, A.__cache = {}, this } function x(A) { const v = { boundary: 0, storage: 0 }; return typeof A == "number" || typeof A == "boolean" ? (v.boundary = 4, v.storage = 4) : A.isVector2 ? (v.boundary = 8, v.storage = 8) : A.isVector3 || A.isColor ? (v.boundary = 16, v.storage = 12) : A.isVector4 ? (v.boundary = 16, v.storage = 16) : A.isMatrix3 ? (v.boundary = 48, v.storage = 48) : A.isMatrix4 ? (v.boundary = 64, v.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), v } function p(A) { const v = A.target; v.removeEventListener("dispose", p); const y = o.indexOf(v.__bindingPointIndex); o.splice(y, 1), i.deleteBuffer(r[v.id]), delete r[v.id], delete s[v.id] } function h() { for (const A in r) i.deleteBuffer(r[A]); o = [], r = {}, s = {} } return { bind: c, update: l, dispose: h } } class Qo { constructor(t = {}) { const { canvas: e = Dl(), context: n = null, depth: r = !0, stencil: s = !0, alpha: o = !1, antialias: a = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: u = "default", failIfMajorPerformanceCaveat: f = !1 } = t; this.isWebGLRenderer = !0; let d; n !== null ? d = n.getContextAttributes().alpha : d = o; const g = new Uint32Array(4), _ = new Int32Array(4); let x = null, p = null; const h = [], A = []; this.domElement = e, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = re, this._useLegacyLights = !1, this.toneMapping = un, this.toneMappingExposure = 1; const v = this; let y = !1, U = 0, P = 0, R = null, q = -1, S = null; const w = new he, J = new he; let k = null; const ut = new Yt(0); let N = 0, W = e.width, Z = e.height, j = 1, B = null, it = null; const nt = new he(0, 0, W, Z), pt = new he(0, 0, W, Z); let mt = !1; const tt = new As; let D = !1, C = !1, b = null; const E = new ie, Y = new dt, rt = new z, G = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function ot() { return R === null ? j : 1 } let I = n; function yt(T, V) { for (let $ = 0; $ < T.length; $++) { const Q = T[$], K = e.getContext(Q, V); if (K !== null) return K } return null } try { const T = { alpha: !0, depth: r, stencil: s, antialias: a, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: f }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ss}`), e.addEventListener("webglcontextlost", St, !1), e.addEventListener("webglcontextrestored", O, !1), e.addEventListener("webglcontextcreationerror", _t, !1), I === null) { const V = ["webgl2", "webgl", "experimental-webgl"]; if (v.isWebGL1Renderer === !0 && V.shift(), I = yt(V, T), I === null) throw yt(V) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } typeof WebGLRenderingContext < "u" && I instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), I.getShaderPrecisionFormat === void 0 && (I.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (T) { throw console.error("THREE.WebGLRenderer: " + T.message), T } let X, et, st, vt, F, m, M, H, lt, ct, at, wt, Tt, bt, Lt, It, ht, Vt, L, ft, Mt, gt, Rt, kt; function Xt() { X = new Yf(I), et = new Gf(I, X, t), X.init(et), gt = new Dp(I, X, et), st = new Pp(I, X, et), vt = new Kf(I), F = new gp, m = new Lp(I, X, st, F, et, gt, vt), M = new kf(v), H = new qf(v), lt = new iu(I, et), Rt = new zf(I, X, lt, et), ct = new jf(I, lt, vt, Rt), at = new td(I, ct, lt, vt), L = new Qf(I, et, m), It = new Vf(F), wt = new mp(v, M, H, X, et, Rt, It), Tt = new Op(v, F), bt = new xp, Lt = new Tp(X, et), Vt = new Bf(v, M, H, st, at, d, c), ht = new Cp(v, at, et), kt = new Fp(I, vt, et, st), ft = new Hf(I, X, vt, et), Mt = new Zf(I, X, vt, et), vt.programs = wt.programs, v.capabilities = et, v.extensions = X, v.properties = F, v.renderLists = bt, v.shadowMap = ht, v.state = st, v.info = vt } Xt(); const Ht = new Np(v, I); this.xr = Ht, this.getContext = function () { return I }, this.getContextAttributes = function () { return I.getContextAttributes() }, this.forceContextLoss = function () { const T = X.get("WEBGL_lose_context"); T && T.loseContext() }, this.forceContextRestore = function () { const T = X.get("WEBGL_lose_context"); T && T.restoreContext() }, this.getPixelRatio = function () { return j }, this.setPixelRatio = function (T) { T !== void 0 && (j = T, this.setSize(W, Z, !1)) }, this.getSize = function (T) { return T.set(W, Z) }, this.setSize = function (T, V, $ = !0) { if (Ht.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } W = T, Z = V, e.width = Math.floor(T * j), e.height = Math.floor(V * j), $ === !0 && (e.style.width = T + "px", e.style.height = V + "px"), this.setViewport(0, 0, T, V) }, this.getDrawingBufferSize = function (T) { return T.set(W * j, Z * j).floor() }, this.setDrawingBufferSize = function (T, V, $) { W = T, Z = V, j = $, e.width = Math.floor(T * $), e.height = Math.floor(V * $), this.setViewport(0, 0, T, V) }, this.getCurrentViewport = function (T) { return T.copy(w) }, this.getViewport = function (T) { return T.copy(nt) }, this.setViewport = function (T, V, $, Q) { T.isVector4 ? nt.set(T.x, T.y, T.z, T.w) : nt.set(T, V, $, Q), st.viewport(w.copy(nt).multiplyScalar(j).floor()) }, this.getScissor = function (T) { return T.copy(pt) }, this.setScissor = function (T, V, $, Q) { T.isVector4 ? pt.set(T.x, T.y, T.z, T.w) : pt.set(T, V, $, Q), st.scissor(J.copy(pt).multiplyScalar(j).floor()) }, this.getScissorTest = function () { return mt }, this.setScissorTest = function (T) { st.setScissorTest(mt = T) }, this.setOpaqueSort = function (T) { B = T }, this.setTransparentSort = function (T) { it = T }, this.getClearColor = function (T) { return T.copy(Vt.getClearColor()) }, this.setClearColor = function () { Vt.setClearColor.apply(Vt, arguments) }, this.getClearAlpha = function () { return Vt.getClearAlpha() }, this.setClearAlpha = function () { Vt.setClearAlpha.apply(Vt, arguments) }, this.clear = function (T = !0, V = !0, $ = !0) { let Q = 0; if (T) { let K = !1; if (R !== null) { const At = R.texture.format; K = At === wo || At === Ao || At === bo } if (K) { const At = R.texture.type, Pt = At === hn || At === on || At === ys || At === bn || At === Eo || At === To, Ut = Vt.getClearColor(), Nt = Vt.getClearAlpha(), Gt = Ut.r, Ft = Ut.g, Bt = Ut.b; Pt ? (g[0] = Gt, g[1] = Ft, g[2] = Bt, g[3] = Nt, I.clearBufferuiv(I.COLOR, 0, g)) : (_[0] = Gt, _[1] = Ft, _[2] = Bt, _[3] = Nt, I.clearBufferiv(I.COLOR, 0, _)) } else Q |= I.COLOR_BUFFER_BIT } V && (Q |= I.DEPTH_BUFFER_BIT), $ && (Q |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(Q) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { e.removeEventListener("webglcontextlost", St, !1), e.removeEventListener("webglcontextrestored", O, !1), e.removeEventListener("webglcontextcreationerror", _t, !1), bt.dispose(), Lt.dispose(), F.dispose(), M.dispose(), H.dispose(), at.dispose(), Rt.dispose(), kt.dispose(), wt.dispose(), Ht.dispose(), Ht.removeEventListener("sessionstart", ge), Ht.removeEventListener("sessionend", Kt), b && (b.dispose(), b = null), _e.stop() }; function St(T) { T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0 } function O() { console.log("THREE.WebGLRenderer: Context Restored."), y = !1; const T = vt.autoReset, V = ht.enabled, $ = ht.autoUpdate, Q = ht.needsUpdate, K = ht.type; Xt(), vt.autoReset = T, ht.enabled = V, ht.autoUpdate = $, ht.needsUpdate = Q, ht.type = K } function _t(T) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage) } function xt(T) { const V = T.target; V.removeEventListener("dispose", xt), Dt(V) } function Dt(T) { Ct(T), F.remove(T) } function Ct(T) { const V = F.get(T).programs; V !== void 0 && (V.forEach(function ($) { wt.releaseProgram($) }), T.isShaderMaterial && wt.releaseShaderCache(T)) } this.renderBufferDirect = function (T, V, $, Q, K, At) { V === null && (V = G); const Pt = K.isMesh && K.matrixWorld.determinant() < 0, Ut = mc(T, V, $, Q, K); st.setMaterial(Q, Pt); let Nt = $.index, Gt = 1; if (Q.wireframe === !0) { if (Nt = ct.getWireframeAttribute($), Nt === void 0) return; Gt = 2 } const Ft = $.drawRange, Bt = $.attributes.position; let ee = Ft.start * Gt, Te = (Ft.start + Ft.count) * Gt; At !== null && (ee = Math.max(ee, At.start * Gt), Te = Math.min(Te, (At.start + At.count) * Gt)), Nt !== null ? (ee = Math.max(ee, 0), Te = Math.min(Te, Nt.count)) : Bt != null && (ee = Math.max(ee, 0), Te = Math.min(Te, Bt.count)); const ce = Te - ee; if (ce < 0 || ce === 1 / 0) return; Rt.setup(K, Q, Ut, $, Nt); let We, $t = ft; if (Nt !== null && (We = lt.get(Nt), $t = Mt, $t.setIndex(We)), K.isMesh) Q.wireframe === !0 ? (st.setLineWidth(Q.wireframeLinewidth * ot()), $t.setMode(I.LINES)) : $t.setMode(I.TRIANGLES); else if (K.isLine) { let Wt = Q.linewidth; Wt === void 0 && (Wt = 1), st.setLineWidth(Wt * ot()), K.isLineSegments ? $t.setMode(I.LINES) : K.isLineLoop ? $t.setMode(I.LINE_LOOP) : $t.setMode(I.LINE_STRIP) } else K.isPoints ? $t.setMode(I.POINTS) : K.isSprite && $t.setMode(I.TRIANGLES); if (K.isBatchedMesh) $t.renderMultiDraw(K._multiDrawStarts, K._multiDrawCounts, K._multiDrawCount); else if (K.isInstancedMesh) $t.renderInstances(ee, ce, K.count); else if ($.isInstancedBufferGeometry) { const Wt = $._maxInstanceCount !== void 0 ? $._maxInstanceCount : 1 / 0, br = Math.min($.instanceCount, Wt); $t.renderInstances(ee, ce, br) } else $t.render(ee, ce) }; function qt(T, V, $) { T.transparent === !0 && T.side === Ne && T.forceSinglePass === !1 ? (T.side = Ee, T.needsUpdate = !0, Oi(T, V, $), T.side = fn, T.needsUpdate = !0, Oi(T, V, $), T.side = Ne) : Oi(T, V, $) } this.compile = function (T, V, $ = null) { $ === null && ($ = T), p = Lt.get($), p.init(), A.push(p), $.traverseVisible(function (K) { K.isLight && K.layers.test(V.layers) && (p.pushLight(K), K.castShadow && p.pushShadow(K)) }), T !== $ && T.traverseVisible(function (K) { K.isLight && K.layers.test(V.layers) && (p.pushLight(K), K.castShadow && p.pushShadow(K)) }), p.setupLights(v._useLegacyLights); const Q = new Set; return T.traverse(function (K) { const At = K.material; if (At) if (Array.isArray(At)) for (let Pt = 0; Pt < At.length; Pt++) { const Ut = At[Pt]; qt(Ut, $, K), Q.add(Ut) } else qt(At, $, K), Q.add(At) }), A.pop(), p = null, Q }, this.compileAsync = function (T, V, $ = null) { const Q = this.compile(T, V, $); return new Promise(K => { function At() { if (Q.forEach(function (Pt) { F.get(Pt).currentProgram.isReady() && Q.delete(Pt) }), Q.size === 0) { K(T); return } setTimeout(At, 10) } X.get("KHR_parallel_shader_compile") !== null ? At() : setTimeout(At, 10) }) }; let jt = null; function oe(T) { jt && jt(T) } function ge() { _e.stop() } function Kt() { _e.start() } const _e = new Xo; _e.setAnimationLoop(oe), typeof self < "u" && _e.setContext(self), this.setAnimationLoop = function (T) { jt = T, Ht.setAnimationLoop(T), T === null ? _e.stop() : _e.start() }, Ht.addEventListener("sessionstart", ge), Ht.addEventListener("sessionend", Kt), this.render = function (T, V) { if (V !== void 0 && V.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (y === !0) return; T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), V.parent === null && V.matrixWorldAutoUpdate === !0 && V.updateMatrixWorld(), Ht.enabled === !0 && Ht.isPresenting === !0 && (Ht.cameraAutoUpdate === !0 && Ht.updateCamera(V), V = Ht.getCamera()), T.isScene === !0 && T.onBeforeRender(v, T, V, R), p = Lt.get(T, A.length), p.init(), A.push(p), E.multiplyMatrices(V.projectionMatrix, V.matrixWorldInverse), tt.setFromProjectionMatrix(E), C = this.localClippingEnabled, D = It.init(this.clippingPlanes, C), x = bt.get(T, h.length), x.init(), h.push(x), Be(T, V, 0, v.sortObjects), x.finish(), v.sortObjects === !0 && x.sort(B, it), this.info.render.frame++, D === !0 && It.beginShadows(); const $ = p.state.shadowsArray; if (ht.render($, T, V), D === !0 && It.endShadows(), this.info.autoReset === !0 && this.info.reset(), Vt.render(x, T), p.setupLights(v._useLegacyLights), V.isArrayCamera) { const Q = V.cameras; for (let K = 0, At = Q.length; K < At; K++) { const Pt = Q[K]; Us(x, T, Pt, Pt.viewport) } } else Us(x, T, V); R !== null && (m.updateMultisampleRenderTarget(R), m.updateRenderTargetMipmap(R)), T.isScene === !0 && T.onAfterRender(v, T, V), Rt.resetDefaultState(), q = -1, S = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null, h.pop(), h.length > 0 ? x = h[h.length - 1] : x = null }; function Be(T, V, $, Q) { if (T.visible === !1) return; if (T.layers.test(V.layers)) { if (T.isGroup) $ = T.renderOrder; else if (T.isLOD) T.autoUpdate === !0 && T.update(V); else if (T.isLight) p.pushLight(T), T.castShadow && p.pushShadow(T); else if (T.isSprite) { if (!T.frustumCulled || tt.intersectsSprite(T)) { Q && rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(E); const Pt = at.update(T), Ut = T.material; Ut.visible && x.push(T, Pt, Ut, $, rt.z, null) } } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || tt.intersectsObject(T))) { const Pt = at.update(T), Ut = T.material; if (Q && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), rt.copy(T.boundingSphere.center)) : (Pt.boundingSphere === null && Pt.computeBoundingSphere(), rt.copy(Pt.boundingSphere.center)), rt.applyMatrix4(T.matrixWorld).applyMatrix4(E)), Array.isArray(Ut)) { const Nt = Pt.groups; for (let Gt = 0, Ft = Nt.length; Gt < Ft; Gt++) { const Bt = Nt[Gt], ee = Ut[Bt.materialIndex]; ee && ee.visible && x.push(T, Pt, ee, $, rt.z, Bt) } } else Ut.visible && x.push(T, Pt, Ut, $, rt.z, null) } } const At = T.children; for (let Pt = 0, Ut = At.length; Pt < Ut; Pt++)Be(At[Pt], V, $, Q) } function Us(T, V, $, Q) { const K = T.opaque, At = T.transmissive, Pt = T.transparent; p.setupLightsView($), D === !0 && It.setGlobalState(v.clippingPlanes, $), At.length > 0 && pc(K, At, V, $), Q && st.viewport(w.copy(Q)), K.length > 0 && Ni(K, V, $), At.length > 0 && Ni(At, V, $), Pt.length > 0 && Ni(Pt, V, $), st.buffers.depth.setTest(!0), st.buffers.depth.setMask(!0), st.buffers.color.setMask(!0), st.setPolygonOffset(!1) } function pc(T, V, $, Q) { if (($.isScene === !0 ? $.overrideMaterial : null) !== null) return; const At = et.isWebGL2; b === null && (b = new Rn(1, 1, { generateMipmaps: !0, type: X.has("EXT_color_buffer_half_float") ? bi : hn, minFilter: Ti, samples: At ? 4 : 0 })), v.getDrawingBufferSize(Y), At ? b.setSize(Y.x, Y.y) : b.setSize(_r(Y.x), _r(Y.y)); const Pt = v.getRenderTarget(); v.setRenderTarget(b), v.getClearColor(ut), N = v.getClearAlpha(), N < 1 && v.setClearColor(16777215, .5), v.clear(); const Ut = v.toneMapping; v.toneMapping = un, Ni(T, $, Q), m.updateMultisampleRenderTarget(b), m.updateRenderTargetMipmap(b); let Nt = !1; for (let Gt = 0, Ft = V.length; Gt < Ft; Gt++) { const Bt = V[Gt], ee = Bt.object, Te = Bt.geometry, ce = Bt.material, We = Bt.group; if (ce.side === Ne && ee.layers.test(Q.layers)) { const $t = ce.side; ce.side = Ee, ce.needsUpdate = !0, Is(ee, $, Q, Te, ce, We), ce.side = $t, ce.needsUpdate = !0, Nt = !0 } } Nt === !0 && (m.updateMultisampleRenderTarget(b), m.updateRenderTargetMipmap(b)), v.setRenderTarget(Pt), v.setClearColor(ut, N), v.toneMapping = Ut } function Ni(T, V, $) { const Q = V.isScene === !0 ? V.overrideMaterial : null; for (let K = 0, At = T.length; K < At; K++) { const Pt = T[K], Ut = Pt.object, Nt = Pt.geometry, Gt = Q === null ? Pt.material : Q, Ft = Pt.group; Ut.layers.test($.layers) && Is(Ut, V, $, Nt, Gt, Ft) } } function Is(T, V, $, Q, K, At) { T.onBeforeRender(v, V, $, Q, K, At), T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), K.onBeforeRender(v, V, $, Q, T, At), K.transparent === !0 && K.side === Ne && K.forceSinglePass === !1 ? (K.side = Ee, K.needsUpdate = !0, v.renderBufferDirect($, V, Q, K, T, At), K.side = fn, K.needsUpdate = !0, v.renderBufferDirect($, V, Q, K, T, At), K.side = Ne) : v.renderBufferDirect($, V, Q, K, T, At), T.onAfterRender(v, V, $, Q, K, At) } function Oi(T, V, $) { V.isScene !== !0 && (V = G); const Q = F.get(T), K = p.state.lights, At = p.state.shadowsArray, Pt = K.state.version, Ut = wt.getParameters(T, K.state, At, V, $), Nt = wt.getProgramCacheKey(Ut); let Gt = Q.programs; Q.environment = T.isMeshStandardMaterial ? V.environment : null, Q.fog = V.fog, Q.envMap = (T.isMeshStandardMaterial ? H : M).get(T.envMap || Q.environment), Gt === void 0 && (T.addEventListener("dispose", xt), Gt = new Map, Q.programs = Gt); let Ft = Gt.get(Nt); if (Ft !== void 0) { if (Q.currentProgram === Ft && Q.lightsStateVersion === Pt) return Os(T, Ut), Ft } else Ut.uniforms = wt.getUniforms(T), T.onBuild($, Ut, v), T.onBeforeCompile(Ut, v), Ft = wt.acquireProgram(Ut, Nt), Gt.set(Nt, Ft), Q.uniforms = Ut.uniforms; const Bt = Q.uniforms; return (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Bt.clippingPlanes = It.uniform), Os(T, Ut), Q.needsLights = _c(T), Q.lightsStateVersion = Pt, Q.needsLights && (Bt.ambientLightColor.value = K.state.ambient, Bt.lightProbe.value = K.state.probe, Bt.directionalLights.value = K.state.directional, Bt.directionalLightShadows.value = K.state.directionalShadow, Bt.spotLights.value = K.state.spot, Bt.spotLightShadows.value = K.state.spotShadow, Bt.rectAreaLights.value = K.state.rectArea, Bt.ltc_1.value = K.state.rectAreaLTC1, Bt.ltc_2.value = K.state.rectAreaLTC2, Bt.pointLights.value = K.state.point, Bt.pointLightShadows.value = K.state.pointShadow, Bt.hemisphereLights.value = K.state.hemi, Bt.directionalShadowMap.value = K.state.directionalShadowMap, Bt.directionalShadowMatrix.value = K.state.directionalShadowMatrix, Bt.spotShadowMap.value = K.state.spotShadowMap, Bt.spotLightMatrix.value = K.state.spotLightMatrix, Bt.spotLightMap.value = K.state.spotLightMap, Bt.pointShadowMap.value = K.state.pointShadowMap, Bt.pointShadowMatrix.value = K.state.pointShadowMatrix), Q.currentProgram = Ft, Q.uniformsList = null, Ft } function Ns(T) { if (T.uniformsList === null) { const V = T.currentProgram.getUniforms(); T.uniformsList = ur.seqWithValue(V.seq, T.uniforms) } return T.uniformsList } function Os(T, V) { const $ = F.get(T); $.outputColorSpace = V.outputColorSpace, $.batching = V.batching, $.instancing = V.instancing, $.instancingColor = V.instancingColor, $.skinning = V.skinning, $.morphTargets = V.morphTargets, $.morphNormals = V.morphNormals, $.morphColors = V.morphColors, $.morphTargetsCount = V.morphTargetsCount, $.numClippingPlanes = V.numClippingPlanes, $.numIntersection = V.numClipIntersection, $.vertexAlphas = V.vertexAlphas, $.vertexTangents = V.vertexTangents, $.toneMapping = V.toneMapping } function mc(T, V, $, Q, K) { V.isScene !== !0 && (V = G), m.resetTextureUnits(); const At = V.fog, Pt = Q.isMeshStandardMaterial ? V.environment : null, Ut = R === null ? v.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : Qe, Nt = (Q.isMeshStandardMaterial ? H : M).get(Q.envMap || Pt), Gt = Q.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4, Ft = !!$.attributes.tangent && (!!Q.normalMap || Q.anisotropy > 0), Bt = !!$.morphAttributes.position, ee = !!$.morphAttributes.normal, Te = !!$.morphAttributes.color; let ce = un; Q.toneMapped && (R === null || R.isXRRenderTarget === !0) && (ce = v.toneMapping); const We = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, $t = We !== void 0 ? We.length : 0, Wt = F.get(Q), br = p.state.lights; if (D === !0 && (C === !0 || T !== S)) { const Re = T === S && Q.id === q; It.setState(Q, T, Re) } let te = !1; Q.version === Wt.__version ? (Wt.needsLights && Wt.lightsStateVersion !== br.state.version || Wt.outputColorSpace !== Ut || K.isBatchedMesh && Wt.batching === !1 || !K.isBatchedMesh && Wt.batching === !0 || K.isInstancedMesh && Wt.instancing === !1 || !K.isInstancedMesh && Wt.instancing === !0 || K.isSkinnedMesh && Wt.skinning === !1 || !K.isSkinnedMesh && Wt.skinning === !0 || K.isInstancedMesh && Wt.instancingColor === !0 && K.instanceColor === null || K.isInstancedMesh && Wt.instancingColor === !1 && K.instanceColor !== null || Wt.envMap !== Nt || Q.fog === !0 && Wt.fog !== At || Wt.numClippingPlanes !== void 0 && (Wt.numClippingPlanes !== It.numPlanes || Wt.numIntersection !== It.numIntersection) || Wt.vertexAlphas !== Gt || Wt.vertexTangents !== Ft || Wt.morphTargets !== Bt || Wt.morphNormals !== ee || Wt.morphColors !== Te || Wt.toneMapping !== ce || et.isWebGL2 === !0 && Wt.morphTargetsCount !== $t) && (te = !0) : (te = !0, Wt.__version = Q.version); let mn = Wt.currentProgram; te === !0 && (mn = Oi(Q, V, K)); let Fs = !1, pi = !1, Ar = !1; const de = mn.getUniforms(), gn = Wt.uniforms; if (st.useProgram(mn.program) && (Fs = !0, pi = !0, Ar = !0), Q.id !== q && (q = Q.id, pi = !0), Fs || S !== T) { de.setValue(I, "projectionMatrix", T.projectionMatrix), de.setValue(I, "viewMatrix", T.matrixWorldInverse); const Re = de.map.cameraPosition; Re !== void 0 && Re.setValue(I, rt.setFromMatrixPosition(T.matrixWorld)), et.logarithmicDepthBuffer && de.setValue(I, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), (Q.isMeshPhongMaterial || Q.isMeshToonMaterial || Q.isMeshLambertMaterial || Q.isMeshBasicMaterial || Q.isMeshStandardMaterial || Q.isShaderMaterial) && de.setValue(I, "isOrthographic", T.isOrthographicCamera === !0), S !== T && (S = T, pi = !0, Ar = !0) } if (K.isSkinnedMesh) { de.setOptional(I, K, "bindMatrix"), de.setOptional(I, K, "bindMatrixInverse"); const Re = K.skeleton; Re && (et.floatVertexTextures ? (Re.boneTexture === null && Re.computeBoneTexture(), de.setValue(I, "boneTexture", Re.boneTexture, m)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")) } K.isBatchedMesh && (de.setOptional(I, K, "batchingTexture"), de.setValue(I, "batchingTexture", K._matricesTexture, m)); const wr = $.morphAttributes; if ((wr.position !== void 0 || wr.normal !== void 0 || wr.color !== void 0 && et.isWebGL2 === !0) && L.update(K, $, mn), (pi || Wt.receiveShadow !== K.receiveShadow) && (Wt.receiveShadow = K.receiveShadow, de.setValue(I, "receiveShadow", K.receiveShadow)), Q.isMeshGouraudMaterial && Q.envMap !== null && (gn.envMap.value = Nt, gn.flipEnvMap.value = Nt.isCubeTexture && Nt.isRenderTargetTexture === !1 ? -1 : 1), pi && (de.setValue(I, "toneMappingExposure", v.toneMappingExposure), Wt.needsLights && gc(gn, Ar), At && Q.fog === !0 && Tt.refreshFogUniforms(gn, At), Tt.refreshMaterialUniforms(gn, Q, j, Z, b), ur.upload(I, Ns(Wt), gn, m)), Q.isShaderMaterial && Q.uniformsNeedUpdate === !0 && (ur.upload(I, Ns(Wt), gn, m), Q.uniformsNeedUpdate = !1), Q.isSpriteMaterial && de.setValue(I, "center", K.center), de.setValue(I, "modelViewMatrix", K.modelViewMatrix), de.setValue(I, "normalMatrix", K.normalMatrix), de.setValue(I, "modelMatrix", K.matrixWorld), Q.isShaderMaterial || Q.isRawShaderMaterial) { const Re = Q.uniformsGroups; for (let Rr = 0, xc = Re.length; Rr < xc; Rr++)if (et.isWebGL2) { const Bs = Re[Rr]; kt.update(Bs, mn), kt.bind(Bs, mn) } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.") } return mn } function gc(T, V) { T.ambientLightColor.needsUpdate = V, T.lightProbe.needsUpdate = V, T.directionalLights.needsUpdate = V, T.directionalLightShadows.needsUpdate = V, T.pointLights.needsUpdate = V, T.pointLightShadows.needsUpdate = V, T.spotLights.needsUpdate = V, T.spotLightShadows.needsUpdate = V, T.rectAreaLights.needsUpdate = V, T.hemisphereLights.needsUpdate = V } function _c(T) { return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0 } this.getActiveCubeFace = function () { return U }, this.getActiveMipmapLevel = function () { return P }, this.getRenderTarget = function () { return R }, this.setRenderTargetTextures = function (T, V, $) { F.get(T.texture).__webglTexture = V, F.get(T.depthTexture).__webglTexture = $; const Q = F.get(T); Q.__hasExternalTextures = !0, Q.__hasExternalTextures && (Q.__autoAllocateDepthBuffer = $ === void 0, Q.__autoAllocateDepthBuffer || X.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), Q.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function (T, V) { const $ = F.get(T); $.__webglFramebuffer = V, $.__useDefaultFramebuffer = V === void 0 }, this.setRenderTarget = function (T, V = 0, $ = 0) { R = T, U = V, P = $; let Q = !0, K = null, At = !1, Pt = !1; if (T) { const Nt = F.get(T); Nt.__useDefaultFramebuffer !== void 0 ? (st.bindFramebuffer(I.FRAMEBUFFER, null), Q = !1) : Nt.__webglFramebuffer === void 0 ? m.setupRenderTarget(T) : Nt.__hasExternalTextures && m.rebindTextures(T, F.get(T.texture).__webglTexture, F.get(T.depthTexture).__webglTexture); const Gt = T.texture; (Gt.isData3DTexture || Gt.isDataArrayTexture || Gt.isCompressedArrayTexture) && (Pt = !0); const Ft = F.get(T).__webglFramebuffer; T.isWebGLCubeRenderTarget ? (Array.isArray(Ft[V]) ? K = Ft[V][$] : K = Ft[V], At = !0) : et.isWebGL2 && T.samples > 0 && m.useMultisampledRTT(T) === !1 ? K = F.get(T).__webglMultisampledFramebuffer : Array.isArray(Ft) ? K = Ft[$] : K = Ft, w.copy(T.viewport), J.copy(T.scissor), k = T.scissorTest } else w.copy(nt).multiplyScalar(j).floor(), J.copy(pt).multiplyScalar(j).floor(), k = mt; if (st.bindFramebuffer(I.FRAMEBUFFER, K) && et.drawBuffers && Q && st.drawBuffers(T, K), st.viewport(w), st.scissor(J), st.setScissorTest(k), At) { const Nt = F.get(T.texture); I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + V, Nt.__webglTexture, $) } else if (Pt) { const Nt = F.get(T.texture), Gt = V || 0; I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Nt.__webglTexture, $ || 0, Gt) } q = -1 }, this.readRenderTargetPixels = function (T, V, $, Q, K, At, Pt) { if (!(T && T.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let Ut = F.get(T).__webglFramebuffer; if (T.isWebGLCubeRenderTarget && Pt !== void 0 && (Ut = Ut[Pt]), Ut) { st.bindFramebuffer(I.FRAMEBUFFER, Ut); try { const Nt = T.texture, Gt = Nt.format, Ft = Nt.type; if (Gt !== Fe && gt.convert(Gt) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const Bt = Ft === bi && (X.has("EXT_color_buffer_half_float") || et.isWebGL2 && X.has("EXT_color_buffer_float")); if (Ft !== hn && gt.convert(Ft) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ft === cn && (et.isWebGL2 || X.has("OES_texture_float") || X.has("WEBGL_color_buffer_float"))) && !Bt) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } V >= 0 && V <= T.width - Q && $ >= 0 && $ <= T.height - K && I.readPixels(V, $, Q, K, gt.convert(Gt), gt.convert(Ft), At) } finally { const Nt = R !== null ? F.get(R).__webglFramebuffer : null; st.bindFramebuffer(I.FRAMEBUFFER, Nt) } } }, this.copyFramebufferToTexture = function (T, V, $ = 0) { const Q = Math.pow(2, -$), K = Math.floor(V.image.width * Q), At = Math.floor(V.image.height * Q); m.setTexture2D(V, 0), I.copyTexSubImage2D(I.TEXTURE_2D, $, 0, 0, T.x, T.y, K, At), st.unbindTexture() }, this.copyTextureToTexture = function (T, V, $, Q = 0) { const K = V.image.width, At = V.image.height, Pt = gt.convert($.format), Ut = gt.convert($.type); m.setTexture2D($, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, $.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, $.unpackAlignment), V.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, Q, T.x, T.y, K, At, Pt, Ut, V.image.data) : V.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, Q, T.x, T.y, V.mipmaps[0].width, V.mipmaps[0].height, Pt, V.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, Q, T.x, T.y, Pt, Ut, V.image), Q === 0 && $.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), st.unbindTexture() }, this.copyTextureToTexture3D = function (T, V, $, Q, K = 0) { if (v.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const At = T.max.x - T.min.x + 1, Pt = T.max.y - T.min.y + 1, Ut = T.max.z - T.min.z + 1, Nt = gt.convert(Q.format), Gt = gt.convert(Q.type); let Ft; if (Q.isData3DTexture) m.setTexture3D(Q, 0), Ft = I.TEXTURE_3D; else if (Q.isDataArrayTexture || Q.isCompressedArrayTexture) m.setTexture2DArray(Q, 0), Ft = I.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, Q.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Q.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, Q.unpackAlignment); const Bt = I.getParameter(I.UNPACK_ROW_LENGTH), ee = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Te = I.getParameter(I.UNPACK_SKIP_PIXELS), ce = I.getParameter(I.UNPACK_SKIP_ROWS), We = I.getParameter(I.UNPACK_SKIP_IMAGES), $t = $.isCompressedTexture ? $.mipmaps[K] : $.image; I.pixelStorei(I.UNPACK_ROW_LENGTH, $t.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, $t.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, T.min.x), I.pixelStorei(I.UNPACK_SKIP_ROWS, T.min.y), I.pixelStorei(I.UNPACK_SKIP_IMAGES, T.min.z), $.isDataTexture || $.isData3DTexture ? I.texSubImage3D(Ft, K, V.x, V.y, V.z, At, Pt, Ut, Nt, Gt, $t.data) : $.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), I.compressedTexSubImage3D(Ft, K, V.x, V.y, V.z, At, Pt, Ut, Nt, $t.data)) : I.texSubImage3D(Ft, K, V.x, V.y, V.z, At, Pt, Ut, Nt, Gt, $t), I.pixelStorei(I.UNPACK_ROW_LENGTH, Bt), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, ee), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Te), I.pixelStorei(I.UNPACK_SKIP_ROWS, ce), I.pixelStorei(I.UNPACK_SKIP_IMAGES, We), K === 0 && Q.generateMipmaps && I.generateMipmap(Ft), st.unbindTexture() }, this.initTexture = function (T) { T.isCubeTexture ? m.setTextureCube(T, 0) : T.isData3DTexture ? m.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? m.setTexture2DArray(T, 0) : m.setTexture2D(T, 0), st.unbindTexture() }, this.resetState = function () { U = 0, P = 0, R = null, st.reset(), Rt.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return $e } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(t) { this._outputColorSpace = t; const e = this.getContext(); e.drawingBufferColorSpace = t === Es ? "display-p3" : "srgb", e.unpackColorSpace = Zt.workingColorSpace === Mr ? "display-p3" : "srgb" } get outputEncoding() { return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === re ? wn : Co } set outputEncoding(t) { console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t === wn ? re : Qe } get useLegacyLights() { return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights } set useLegacyLights(t) { console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t } } class Bp extends Qo { } Bp.prototype.isWebGL1Renderer = !0; class zp extends fe { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(t, e) { return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this } toJSON(t) { const e = super.toJSON(t); return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e } } class tc extends Se { constructor(t, e, n, r, s, o, a, c, l) { super(t, e, n, r, s, o, a, c, l), this.isVideoTexture = !0, this.minFilter = o !== void 0 ? o : ye, this.magFilter = s !== void 0 ? s : ye, this.generateMipmaps = !1; const u = this; function f() { u.needsUpdate = !0, t.requestVideoFrameCallback(f) } "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(f) } clone() { return new this.constructor(this.image).copy(this) } update() { const t = this.image; "requestVideoFrameCallback" in t === !1 && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } } class ke { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 } getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null } getPointAt(t, e) { const n = this.getUtoTmapping(t); return this.getPoint(n, e) } getPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++)e.push(this.getPoint(n / t)); return e } getSpacedPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++)e.push(this.getPointAt(n / t)); return e } getLength() { const t = this.getLengths(); return t[t.length - 1] } getLengths(t = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const e = []; let n, r = this.getPoint(0), s = 0; e.push(0); for (let o = 1; o <= t; o++)n = this.getPoint(o / t), s += n.distanceTo(r), e.push(s), r = n; return this.cacheArcLengths = e, e } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(t, e) { const n = this.getLengths(); let r = 0; const s = n.length; let o; e ? o = e : o = t * n[s - 1]; let a = 0, c = s - 1, l; for (; a <= c;)if (r = Math.floor(a + (c - a) / 2), l = n[r] - o, l < 0) a = r + 1; else if (l > 0) c = r - 1; else { c = r; break } if (r = c, n[r] === o) return r / (s - 1); const u = n[r], d = n[r + 1] - u, g = (o - u) / d; return (r + g) / (s - 1) } getTangent(t, e) { let r = t - 1e-4, s = t + 1e-4; r < 0 && (r = 0), s > 1 && (s = 1); const o = this.getPoint(r), a = this.getPoint(s), c = e || (o.isVector2 ? new dt : new z); return c.copy(a).sub(o).normalize(), c } getTangentAt(t, e) { const n = this.getUtoTmapping(t); return this.getTangent(n, e) } computeFrenetFrames(t, e) { const n = new z, r = [], s = [], o = [], a = new z, c = new ie; for (let g = 0; g <= t; g++) { const _ = g / t; r[g] = this.getTangentAt(_, new z) } s[0] = new z, o[0] = new z; let l = Number.MAX_VALUE; const u = Math.abs(r[0].x), f = Math.abs(r[0].y), d = Math.abs(r[0].z); u <= l && (l = u, n.set(1, 0, 0)), f <= l && (l = f, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], a), o[0].crossVectors(r[0], s[0]); for (let g = 1; g <= t; g++) { if (s[g] = s[g - 1].clone(), o[g] = o[g - 1].clone(), a.crossVectors(r[g - 1], r[g]), a.length() > Number.EPSILON) { a.normalize(); const _ = Math.acos(ue(r[g - 1].dot(r[g]), -1, 1)); s[g].applyMatrix4(c.makeRotationAxis(a, _)) } o[g].crossVectors(r[g], s[g]) } if (e === !0) { let g = Math.acos(ue(s[0].dot(s[t]), -1, 1)); g /= t, r[0].dot(a.crossVectors(s[0], s[t])) > 0 && (g = -g); for (let _ = 1; _ <= t; _++)s[_].applyMatrix4(c.makeRotationAxis(r[_], g * _)), o[_].crossVectors(r[_], s[_]) } return { tangents: r, normals: s, binormals: o } } clone() { return new this.constructor().copy(this) } copy(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } toJSON() { const t = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t } fromJSON(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } } class Rs extends ke { constructor(t = 0, e = 0, n = 1, r = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c } getPoint(t, e) { const n = e || new dt, r = Math.PI * 2; let s = this.aEndAngle - this.aStartAngle; const o = Math.abs(s) < Number.EPSILON; for (; s < 0;)s += r; for (; s > r;)s -= r; s < Number.EPSILON && (o ? s = 0 : s = r), this.aClockwise === !0 && !o && (s === r ? s = -r : s = s - r); const a = this.aStartAngle + t * s; let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a); if (this.aRotation !== 0) { const u = Math.cos(this.aRotation), f = Math.sin(this.aRotation), d = c - this.aX, g = l - this.aY; c = d * u - g * f + this.aX, l = d * f + g * u + this.aY } return n.set(c, l) } copy(t) { return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this } toJSON() { const t = super.toJSON(); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t } fromJSON(t) { return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this } } class Hp extends Rs { constructor(t, e, n, r, s, o) { super(t, e, n, n, r, s, o), this.isArcCurve = !0, this.type = "ArcCurve" } } function Cs() { let i = 0, t = 0, e = 0, n = 0; function r(s, o, a, c) { i = s, t = a, e = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c } return { initCatmullRom: function (s, o, a, c, l) { r(o, a, l * (a - s), l * (c - o)) }, initNonuniformCatmullRom: function (s, o, a, c, l, u, f) { let d = (o - s) / l - (a - s) / (l + u) + (a - o) / u, g = (a - o) / u - (c - o) / (u + f) + (c - a) / f; d *= u, g *= u, r(o, a, d, g) }, calc: function (s) { const o = s * s, a = o * s; return i + t * s + e * o + n * a } } } const ar = new z, rs = new Cs, ss = new Cs, as = new Cs; class ec extends ke { constructor(t = [], e = !1, n = "centripetal", r = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = r } getPoint(t, e = new z) { const n = e, r = this.points, s = r.length, o = (s - (this.closed ? 0 : 1)) * t; let a = Math.floor(o), c = o - a; this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1); let l, u; this.closed || a > 0 ? l = r[(a - 1) % s] : (ar.subVectors(r[0], r[1]).add(r[0]), l = ar); const f = r[a % s], d = r[(a + 1) % s]; if (this.closed || a + 2 < s ? u = r[(a + 2) % s] : (ar.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), u = ar), this.curveType === "centripetal" || this.curveType === "chordal") { const g = this.curveType === "chordal" ? .5 : .25; let _ = Math.pow(l.distanceToSquared(f), g), x = Math.pow(f.distanceToSquared(d), g), p = Math.pow(d.distanceToSquared(u), g); x < 1e-4 && (x = 1), _ < 1e-4 && (_ = x), p < 1e-4 && (p = x), rs.initNonuniformCatmullRom(l.x, f.x, d.x, u.x, _, x, p), ss.initNonuniformCatmullRom(l.y, f.y, d.y, u.y, _, x, p), as.initNonuniformCatmullRom(l.z, f.z, d.z, u.z, _, x, p) } else this.curveType === "catmullrom" && (rs.initCatmullRom(l.x, f.x, d.x, u.x, this.tension), ss.initCatmullRom(l.y, f.y, d.y, u.y, this.tension), as.initCatmullRom(l.z, f.z, d.z, u.z, this.tension)); return n.set(rs.calc(c), ss.calc(c), as.calc(c)), n } copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const r = t.points[e]; this.points.push(r.clone()) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this } toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, n = this.points.length; e < n; e++) { const r = this.points[e]; t.points.push(r.toArray()) } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t } fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const r = t.points[e]; this.points.push(new z().fromArray(r)) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this } } function so(i, t, e, n, r) { const s = (n - t) * .5, o = (r - e) * .5, a = i * i, c = i * a; return (2 * e - 2 * n + s + o) * c + (-3 * e + 3 * n - 2 * s - o) * a + s * i + e } function Gp(i, t) { const e = 1 - i; return e * e * t } function Vp(i, t) { return 2 * (1 - i) * i * t } function kp(i, t) { return i * i * t } function yi(i, t, e, n) { return Gp(i, t) + Vp(i, e) + kp(i, n) } function Wp(i, t) { const e = 1 - i; return e * e * e * t } function Xp(i, t) { const e = 1 - i; return 3 * e * e * i * t } function qp(i, t) { return 3 * (1 - i) * i * i * t } function Yp(i, t) { return i * i * i * t } function Ei(i, t, e, n, r) { return Wp(i, t) + Xp(i, e) + qp(i, n) + Yp(i, r) } class nc extends ke { constructor(t = new dt, e = new dt, n = new dt, r = new dt) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r } getPoint(t, e = new dt) { const n = e, r = this.v0, s = this.v1, o = this.v2, a = this.v3; return n.set(Ei(t, r.x, s.x, o.x, a.x), Ei(t, r.y, s.y, o.y, a.y)), n } copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this } toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this } } class jp extends ke { constructor(t = new z, e = new z, n = new z, r = new z) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r } getPoint(t, e = new z) { const n = e, r = this.v0, s = this.v1, o = this.v2, a = this.v3; return n.set(Ei(t, r.x, s.x, o.x, a.x), Ei(t, r.y, s.y, o.y, a.y), Ei(t, r.z, s.z, o.z, a.z)), n } copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this } toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this } } class ic extends ke { constructor(t = new dt, e = new dt) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e } getPoint(t, e = new dt) { const n = e; return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n } getPointAt(t, e) { return this.getPoint(t, e) } getTangent(t, e = new dt) { return e.subVectors(this.v2, this.v1).normalize() } getTangentAt(t, e) { return this.getTangent(t, e) } copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this } toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } } class Zp extends ke { constructor(t = new z, e = new z) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e } getPoint(t, e = new z) { const n = e; return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n } getPointAt(t, e) { return this.getPoint(t, e) } getTangent(t, e = new z) { return e.subVectors(this.v2, this.v1).normalize() } getTangentAt(t, e) { return this.getTangent(t, e) } copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this } toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } } class rc extends ke { constructor(t = new dt, e = new dt, n = new dt) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n } getPoint(t, e = new dt) { const n = e, r = this.v0, s = this.v1, o = this.v2; return n.set(yi(t, r.x, s.x, o.x), yi(t, r.y, s.y, o.y)), n } copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this } toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } } class Kp extends ke { constructor(t = new z, e = new z, n = new z) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n } getPoint(t, e = new z) { const n = e, r = this.v0, s = this.v1, o = this.v2; return n.set(yi(t, r.x, s.x, o.x), yi(t, r.y, s.y, o.y), yi(t, r.z, s.z, o.z)), n } copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this } toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } } class sc extends ke { constructor(t = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t } getPoint(t, e = new dt) { const n = e, r = this.points, s = (r.length - 1) * t, o = Math.floor(s), a = s - o, c = r[o === 0 ? o : o - 1], l = r[o], u = r[o > r.length - 2 ? r.length - 1 : o + 1], f = r[o > r.length - 3 ? r.length - 1 : o + 2]; return n.set(so(a, c.x, l.x, u.x, f.x), so(a, c.y, l.y, u.y, f.y)), n } copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const r = t.points[e]; this.points.push(r.clone()) } return this } toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, n = this.points.length; e < n; e++) { const r = this.points[e]; t.points.push(r.toArray()) } return t } fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const r = t.points[e]; this.points.push(new dt().fromArray(r)) } return this } } var ao = Object.freeze({ __proto__: null, ArcCurve: Hp, CatmullRomCurve3: ec, CubicBezierCurve: nc, CubicBezierCurve3: jp, EllipseCurve: Rs, LineCurve: ic, LineCurve3: Zp, QuadraticBezierCurve: rc, QuadraticBezierCurve3: Kp, SplineCurve: sc }); class Jp extends ke { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 } add(t) { this.curves.push(t) } closePath() { const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1); if (!t.equals(e)) { const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3"; this.curves.push(new ao[n](e, t)) } return this } getPoint(t, e) { const n = t * this.getLength(), r = this.getCurveLengths(); let s = 0; for (; s < r.length;) { if (r[s] >= n) { const o = r[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c; return a.getPointAt(l, e) } s++ } return null } getLength() { const t = this.getCurveLengths(); return t[t.length - 1] } updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() } getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const t = []; let e = 0; for (let n = 0, r = this.curves.length; n < r; n++)e += this.curves[n].getLength(), t.push(e); return this.cacheLengths = t, t } getSpacedPoints(t = 40) { const e = []; for (let n = 0; n <= t; n++)e.push(this.getPoint(n / t)); return this.autoClose && e.push(e[0]), e } getPoints(t = 12) { const e = []; let n; for (let r = 0, s = this.curves; r < s.length; r++) { const o = s[r], a = o.isEllipseCurve ? t * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? t * o.points.length : t, c = o.getPoints(a); for (let l = 0; l < c.length; l++) { const u = c[l]; n && n.equals(u) || (e.push(u), n = u) } } return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e } copy(t) { super.copy(t), this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) { const r = t.curves[e]; this.curves.push(r.clone()) } return this.autoClose = t.autoClose, this } toJSON() { const t = super.toJSON(); t.autoClose = this.autoClose, t.curves = []; for (let e = 0, n = this.curves.length; e < n; e++) { const r = this.curves[e]; t.curves.push(r.toJSON()) } return t } fromJSON(t) { super.fromJSON(t), this.autoClose = t.autoClose, this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) { const r = t.curves[e]; this.curves.push(new ao[r.type]().fromJSON(r)) } return this } } class si extends Jp { constructor(t) { super(), this.type = "Path", this.currentPoint = new dt, t && this.setFromPoints(t) } setFromPoints(t) { this.moveTo(t[0].x, t[0].y); for (let e = 1, n = t.length; e < n; e++)this.lineTo(t[e].x, t[e].y); return this } moveTo(t, e) { return this.currentPoint.set(t, e), this } lineTo(t, e) { const n = new ic(this.currentPoint.clone(), new dt(t, e)); return this.curves.push(n), this.currentPoint.set(t, e), this } quadraticCurveTo(t, e, n, r) { const s = new rc(this.currentPoint.clone(), new dt(t, e), new dt(n, r)); return this.curves.push(s), this.currentPoint.set(n, r), this } bezierCurveTo(t, e, n, r, s, o) { const a = new nc(this.currentPoint.clone(), new dt(t, e), new dt(n, r), new dt(s, o)); return this.curves.push(a), this.currentPoint.set(s, o), this } splineThru(t) { const e = [this.currentPoint.clone()].concat(t), n = new sc(e); return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this } arc(t, e, n, r, s, o) { const a = this.currentPoint.x, c = this.currentPoint.y; return this.absarc(t + a, e + c, n, r, s, o), this } absarc(t, e, n, r, s, o) { return this.absellipse(t, e, n, n, r, s, o), this } ellipse(t, e, n, r, s, o, a, c) { const l = this.currentPoint.x, u = this.currentPoint.y; return this.absellipse(t + l, e + u, n, r, s, o, a, c), this } absellipse(t, e, n, r, s, o, a, c) { const l = new Rs(t, e, n, r, s, o, a, c); if (this.curves.length > 0) { const f = l.getPoint(0); f.equals(this.currentPoint) || this.lineTo(f.x, f.y) } this.curves.push(l); const u = l.getPoint(1); return this.currentPoint.copy(u), this } copy(t) { return super.copy(t), this.currentPoint.copy(t.currentPoint), this } toJSON() { const t = super.toJSON(); return t.currentPoint = this.currentPoint.toArray(), t } fromJSON(t) { return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this } } class hr extends si { constructor(t) { super(t), this.uuid = Un(), this.type = "Shape", this.holes = [] } getPointsHoles(t) { const e = []; for (let n = 0, r = this.holes.length; n < r; n++)e[n] = this.holes[n].getPoints(t); return e } extractPoints(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) } } copy(t) { super.copy(t), this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) { const r = t.holes[e]; this.holes.push(r.clone()) } return this } toJSON() { const t = super.toJSON(); t.uuid = this.uuid, t.holes = []; for (let e = 0, n = this.holes.length; e < n; e++) { const r = this.holes[e]; t.holes.push(r.toJSON()) } return t } fromJSON(t) { super.fromJSON(t), this.uuid = t.uuid, this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) { const r = t.holes[e]; this.holes.push(new si().fromJSON(r)) } return this } } const $p = { triangulate: function (i, t, e = 2) { const n = t && t.length, r = n ? t[0] * e : i.length; let s = ac(i, 0, r, e, !0); const o = []; if (!s || s.next === s.prev) return o; let a, c, l, u, f, d, g; if (n && (s = im(i, t, s, e)), i.length > 80 * e) { a = l = i[0], c = u = i[1]; for (let _ = e; _ < r; _ += e)f = i[_], d = i[_ + 1], f < a && (a = f), d < c && (c = d), f > l && (l = f), d > u && (u = d); g = Math.max(l - a, u - c), g = g !== 0 ? 32767 / g : 0 } return wi(s, o, e, a, c, g, 0), o } }; function ac(i, t, e, n, r) { let s, o; if (r === pm(i, t, e, n) > 0) for (s = t; s < e; s += n)o = oo(s, i[s], i[s + 1], o); else for (s = e - n; s >= t; s -= n)o = oo(s, i[s], i[s + 1], o); return o && Er(o, o.next) && (Ci(o), o = o.next), o } function Ln(i, t) { if (!i) return i; t || (t = i); let e = i, n; do if (n = !1, !e.steiner && (Er(e, e.next) || Qt(e.prev, e, e.next) === 0)) { if (Ci(e), e = t = e.prev, e === e.next) break; n = !0 } else e = e.next; while (n || e !== t); return t } function wi(i, t, e, n, r, s, o) { if (!i) return; !o && s && cm(i, n, r, s); let a = i, c, l; for (; i.prev !== i.next;) { if (c = i.prev, l = i.next, s ? tm(i, n, r, s) : Qp(i)) { t.push(c.i / e | 0), t.push(i.i / e | 0), t.push(l.i / e | 0), Ci(i), i = l.next, a = l.next; continue } if (i = l, i === a) { o ? o === 1 ? (i = em(Ln(i), t, e), wi(i, t, e, n, r, s, 2)) : o === 2 && nm(i, t, e, n, r, s) : wi(Ln(i), t, e, n, r, s, 1); break } } } function Qp(i) { const t = i.prev, e = i, n = i.next; if (Qt(t, e, n) >= 0) return !1; const r = t.x, s = e.x, o = n.x, a = t.y, c = e.y, l = n.y, u = r < s ? r < o ? r : o : s < o ? s : o, f = a < c ? a < l ? a : l : c < l ? c : l, d = r > s ? r > o ? r : o : s > o ? s : o, g = a > c ? a > l ? a : l : c > l ? c : l; let _ = n.next; for (; _ !== t;) { if (_.x >= u && _.x <= d && _.y >= f && _.y <= g && ni(r, a, s, c, o, l, _.x, _.y) && Qt(_.prev, _, _.next) >= 0) return !1; _ = _.next } return !0 } function tm(i, t, e, n) { const r = i.prev, s = i, o = i.next; if (Qt(r, s, o) >= 0) return !1; const a = r.x, c = s.x, l = o.x, u = r.y, f = s.y, d = o.y, g = a < c ? a < l ? a : l : c < l ? c : l, _ = u < f ? u < d ? u : d : f < d ? f : d, x = a > c ? a > l ? a : l : c > l ? c : l, p = u > f ? u > d ? u : d : f > d ? f : d, h = xs(g, _, t, e, n), A = xs(x, p, t, e, n); let v = i.prevZ, y = i.nextZ; for (; v && v.z >= h && y && y.z <= A;) { if (v.x >= g && v.x <= x && v.y >= _ && v.y <= p && v !== r && v !== o && ni(a, u, c, f, l, d, v.x, v.y) && Qt(v.prev, v, v.next) >= 0 || (v = v.prevZ, y.x >= g && y.x <= x && y.y >= _ && y.y <= p && y !== r && y !== o && ni(a, u, c, f, l, d, y.x, y.y) && Qt(y.prev, y, y.next) >= 0)) return !1; y = y.nextZ } for (; v && v.z >= h;) { if (v.x >= g && v.x <= x && v.y >= _ && v.y <= p && v !== r && v !== o && ni(a, u, c, f, l, d, v.x, v.y) && Qt(v.prev, v, v.next) >= 0) return !1; v = v.prevZ } for (; y && y.z <= A;) { if (y.x >= g && y.x <= x && y.y >= _ && y.y <= p && y !== r && y !== o && ni(a, u, c, f, l, d, y.x, y.y) && Qt(y.prev, y, y.next) >= 0) return !1; y = y.nextZ } return !0 } function em(i, t, e) { let n = i; do { const r = n.prev, s = n.next.next; !Er(r, s) && oc(r, n, n.next, s) && Ri(r, s) && Ri(s, r) && (t.push(r.i / e | 0), t.push(n.i / e | 0), t.push(s.i / e | 0), Ci(n), Ci(n.next), n = i = s), n = n.next } while (n !== i); return Ln(n) } function nm(i, t, e, n, r, s) { let o = i; do { let a = o.next.next; for (; a !== o.prev;) { if (o.i !== a.i && hm(o, a)) { let c = cc(o, a); o = Ln(o, o.next), c = Ln(c, c.next), wi(o, t, e, n, r, s, 0), wi(c, t, e, n, r, s, 0); return } a = a.next } o = o.next } while (o !== i) } function im(i, t, e, n) { const r = []; let s, o, a, c, l; for (s = 0, o = t.length; s < o; s++)a = t[s] * n, c = s < o - 1 ? t[s + 1] * n : i.length, l = ac(i, a, c, n, !1), l === l.next && (l.steiner = !0), r.push(um(l)); for (r.sort(rm), s = 0; s < r.length; s++)e = sm(r[s], e); return e } function rm(i, t) { return i.x - t.x } function sm(i, t) { const e = am(i, t); if (!e) return t; const n = cc(e, i); return Ln(n, n.next), Ln(e, e.next) } function am(i, t) { let e = t, n = -1 / 0, r; const s = i.x, o = i.y; do { if (o <= e.y && o >= e.next.y && e.next.y !== e.y) { const d = e.x + (o - e.y) * (e.next.x - e.x) / (e.next.y - e.y); if (d <= s && d > n && (n = d, r = e.x < e.next.x ? e : e.next, d === s)) return r } e = e.next } while (e !== t); if (!r) return null; const a = r, c = r.x, l = r.y; let u = 1 / 0, f; e = r; do s >= e.x && e.x >= c && s !== e.x && ni(o < l ? s : n, o, c, l, o < l ? n : s, o, e.x, e.y) && (f = Math.abs(o - e.y) / (s - e.x), Ri(e, i) && (f < u || f === u && (e.x > r.x || e.x === r.x && om(r, e))) && (r = e, u = f)), e = e.next; while (e !== a); return r } function om(i, t) { return Qt(i.prev, i, t.prev) < 0 && Qt(t.next, i, i.next) < 0 } function cm(i, t, e, n) { let r = i; do r.z === 0 && (r.z = xs(r.x, r.y, t, e, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== i); r.prevZ.nextZ = null, r.prevZ = null, lm(r) } function lm(i) { let t, e, n, r, s, o, a, c, l = 1; do { for (e = i, i = null, s = null, o = 0; e;) { for (o++, n = e, a = 0, t = 0; t < l && (a++, n = n.nextZ, !!n); t++); for (c = l; a > 0 || c > 0 && n;)a !== 0 && (c === 0 || !n || e.z <= n.z) ? (r = e, e = e.nextZ, a--) : (r = n, n = n.nextZ, c--), s ? s.nextZ = r : i = r, r.prevZ = s, s = r; e = n } s.nextZ = null, l *= 2 } while (o > 1); return i } function xs(i, t, e, n, r) { return i = (i - e) * r | 0, t = (t - n) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1 } function um(i) { let t = i, e = i; do (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next; while (t !== i); return e } function ni(i, t, e, n, r, s, o, a) { return (r - o) * (t - a) >= (i - o) * (s - a) && (i - o) * (n - a) >= (e - o) * (t - a) && (e - o) * (s - a) >= (r - o) * (n - a) } function hm(i, t) { return i.next.i !== t.i && i.prev.i !== t.i && !fm(i, t) && (Ri(i, t) && Ri(t, i) && dm(i, t) && (Qt(i.prev, i, t.prev) || Qt(i, t.prev, t)) || Er(i, t) && Qt(i.prev, i, i.next) > 0 && Qt(t.prev, t, t.next) > 0) } function Qt(i, t, e) { return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y) } function Er(i, t) { return i.x === t.x && i.y === t.y } function oc(i, t, e, n) { const r = cr(Qt(i, t, e)), s = cr(Qt(i, t, n)), o = cr(Qt(e, n, i)), a = cr(Qt(e, n, t)); return !!(r !== s && o !== a || r === 0 && or(i, e, t) || s === 0 && or(i, n, t) || o === 0 && or(e, i, n) || a === 0 && or(e, t, n)) } function or(i, t, e) { return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y) } function cr(i) { return i > 0 ? 1 : i < 0 ? -1 : 0 } function fm(i, t) { let e = i; do { if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && oc(e, e.next, i, t)) return !0; e = e.next } while (e !== i); return !1 } function Ri(i, t) { return Qt(i.prev, i, i.next) < 0 ? Qt(i, t, i.next) >= 0 && Qt(i, i.prev, t) >= 0 : Qt(i, t, i.prev) < 0 || Qt(i, i.next, t) < 0 } function dm(i, t) { let e = i, n = !1; const r = (i.x + t.x) / 2, s = (i.y + t.y) / 2; do e.y > s != e.next.y > s && e.next.y !== e.y && r < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next; while (e !== i); return n } function cc(i, t) { const e = new vs(i.i, i.x, i.y), n = new vs(t.i, t.x, t.y), r = i.next, s = t.prev; return i.next = t, t.prev = i, e.next = r, r.prev = e, n.next = e, e.prev = n, s.next = n, n.prev = s, n } function oo(i, t, e, n) { const r = new vs(i, t, e); return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r } function Ci(i) { i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ) } function vs(i, t, e) { this.i = i, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1 } function pm(i, t, e, n) { let r = 0; for (let s = t, o = e - n; s < e; s += n)r += (i[o] - i[s]) * (i[s + 1] + i[o + 1]), o = s; return r } class Tr { static area(t) { const e = t.length; let n = 0; for (let r = e - 1, s = 0; s < e; r = s++)n += t[r].x * t[s].y - t[s].x * t[r].y; return n * .5 } static isClockWise(t) { return Tr.area(t) < 0 } static triangulateShape(t, e) { const n = [], r = [], s = []; co(t), lo(n, t); let o = t.length; e.forEach(co); for (let c = 0; c < e.length; c++)r.push(o), o += e[c].length, lo(n, e[c]); const a = $p.triangulate(n, r); for (let c = 0; c < a.length; c += 3)s.push(a.slice(c, c + 3)); return s } } function co(i) { const t = i.length; t > 2 && i[t - 1].equals(i[0]) && i.pop() } function lo(i, t) { for (let e = 0; e < t.length; e++)i.push(t[e].x), i.push(t[e].y) } class lc extends Li { constructor(t) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Yt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Yt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Po, this.normalScale = new dt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t) } copy(t) { return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this } } const xr = { enabled: !1, files: {}, add: function (i, t) { this.enabled !== !1 && (this.files[i] = t) }, get: function (i) { if (this.enabled !== !1) return this.files[i] }, remove: function (i) { delete this.files[i] }, clear: function () { this.files = {} } }; class mm { constructor(t, e, n) { const r = this; let s = !1, o = 0, a = 0, c; const l = []; this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (u) { a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0 }, this.itemEnd = function (u) { o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad()) }, this.itemError = function (u) { r.onError !== void 0 && r.onError(u) }, this.resolveURL = function (u) { return c ? c(u) : u }, this.setURLModifier = function (u) { return c = u, this }, this.addHandler = function (u, f) { return l.push(u, f), this }, this.removeHandler = function (u) { const f = l.indexOf(u); return f !== -1 && l.splice(f, 2), this }, this.getHandler = function (u) { for (let f = 0, d = l.length; f < d; f += 2) { const g = l[f], _ = l[f + 1]; if (g.global && (g.lastIndex = 0), g.test(u)) return _ } return null } } } const gm = new mm; class Ii { constructor(t) { this.manager = t !== void 0 ? t : gm, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(t, e) { const n = this; return new Promise(function (r, s) { n.load(t, r, e, s) }) } parse() { } setCrossOrigin(t) { return this.crossOrigin = t, this } setWithCredentials(t) { return this.withCredentials = t, this } setPath(t) { return this.path = t, this } setResourcePath(t) { return this.resourcePath = t, this } setRequestHeader(t) { return this.requestHeader = t, this } } Ii.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const Ke = {}; class _m extends Error { constructor(t, e) { super(t), this.response = e } } class xm extends Ii { constructor(t) { super(t) } load(t, e, n, r) { t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t); const s = xr.get(t); if (s !== void 0) return this.manager.itemStart(t), setTimeout(() => { e && e(s), this.manager.itemEnd(t) }, 0), s; if (Ke[t] !== void 0) { Ke[t].push({ onLoad: e, onProgress: n, onError: r }); return } Ke[t] = [], Ke[t].push({ onLoad: e, onProgress: n, onError: r }); const o = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, c = this.responseType; fetch(o).then(l => { if (l.status === 200 || l.status === 0) { if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l; const u = Ke[t], f = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), g = d ? parseInt(d) : 0, _ = g !== 0; let x = 0; const p = new ReadableStream({ start(h) { A(); function A() { f.read().then(({ done: v, value: y }) => { if (v) h.close(); else { x += y.byteLength; const U = new ProgressEvent("progress", { lengthComputable: _, loaded: x, total: g }); for (let P = 0, R = u.length; P < R; P++) { const q = u[P]; q.onProgress && q.onProgress(U) } h.enqueue(y), A() } }) } } }); return new Response(p) } else throw new _m(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l) }).then(l => { switch (c) { case "arraybuffer": return l.arrayBuffer(); case "blob": return l.blob(); case "document": return l.text().then(u => new DOMParser().parseFromString(u, a)); case "json": return l.json(); default: if (a === void 0) return l.text(); { const f = /charset="?([^;"\s]*)"?/i.exec(a), d = f && f[1] ? f[1].toLowerCase() : void 0, g = new TextDecoder(d); return l.arrayBuffer().then(_ => g.decode(_)) } } }).then(l => { xr.add(t, l); const u = Ke[t]; delete Ke[t]; for (let f = 0, d = u.length; f < d; f++) { const g = u[f]; g.onLoad && g.onLoad(l) } }).catch(l => { const u = Ke[t]; if (u === void 0) throw this.manager.itemError(t), l; delete Ke[t]; for (let f = 0, d = u.length; f < d; f++) { const g = u[f]; g.onError && g.onError(l) } this.manager.itemError(t) }).finally(() => { this.manager.itemEnd(t) }), this.manager.itemStart(t) } setResponseType(t) { return this.responseType = t, this } setMimeType(t) { return this.mimeType = t, this } } class vm extends Ii { constructor(t) { super(t) } load(t, e, n, r) { this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t); const s = this, o = xr.get(t); if (o !== void 0) return s.manager.itemStart(t), setTimeout(function () { e && e(o), s.manager.itemEnd(t) }, 0), o; const a = Ai("img"); function c() { u(), xr.add(t, this), e && e(this), s.manager.itemEnd(t) } function l(f) { u(), r && r(f), s.manager.itemError(t), s.manager.itemEnd(t) } function u() { a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1) } return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(t), a.src = t, a } } class Mm extends Ii { constructor(t) { super(t) } load(t, e, n, r) { const s = new Se, o = new vm(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function (a) { s.image = a, s.needsUpdate = !0, e !== void 0 && e(s) }, n, r), s } } class Ps extends fe { constructor(t, e = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Yt(t), this.intensity = e } dispose() { } copy(t, e) { return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this } toJSON(t) { const e = super.toJSON(t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), e } } const os = new ie, uo = new z, ho = new z; class uc { constructor(t) { this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new dt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ie, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new As, this._frameExtents = new dt(1, 1), this._viewportCount = 1, this._viewports = [new he(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(t) { const e = this.camera, n = this.matrix; uo.setFromMatrixPosition(t.matrixWorld), e.position.copy(uo), ho.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ho), e.updateMatrixWorld(), os.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(os), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(os) } getViewport(t) { return this._viewports[t] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const t = {}; return this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } } class Sm extends uc { constructor() { super(new we(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1 } updateMatrices(t) { const e = this.camera, n = hi * 2 * t.angle * this.focus, r = this.mapSize.width / this.mapSize.height, s = t.distance || e.far; (n !== e.fov || r !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = r, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t) } copy(t) { return super.copy(t), this.focus = t.focus, this } } class ym extends Ps { constructor(t, e, n = 0, r = Math.PI / 3, s = 0, o = 2) { super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(fe.DEFAULT_UP), this.updateMatrix(), this.target = new fe, this.distance = n, this.angle = r, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new Sm } get power() { return this.intensity * Math.PI } set power(t) { this.intensity = t / Math.PI } dispose() { this.shadow.dispose() } copy(t, e) { return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } } class Em extends uc { constructor() { super(new qo(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class Tm extends Ps { constructor(t, e) { super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(fe.DEFAULT_UP), this.updateMatrix(), this.target = new fe, this.shadow = new Em } dispose() { this.shadow.dispose() } copy(t) { return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } } class bm extends Ps { constructor(t, e) { super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight" } } class fo { constructor(t = 1, e = 0, n = 0) { return this.radius = t, this.phi = e, this.theta = n, this } set(t, e, n) { return this.radius = t, this.phi = e, this.theta = n, this } copy(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) } setFromCartesianCoords(t, e, n) { return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ue(e / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } } const po = new dt; class Am { constructor(t = new dt(1 / 0, 1 / 0), e = new dt(-1 / 0, -1 / 0)) { this.isBox2 = !0, this.min = t, this.max = e } set(t, e) { return this.min.copy(t), this.max.copy(e), this } setFromPoints(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]); return this } setFromCenterAndSize(t, e) { const n = po.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this } clone() { return new this.constructor().copy(this) } copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this } makeEmpty() { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y } getCenter(t) { return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(t) { return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min) } expandByPoint(t) { return this.min.min(t), this.max.max(t), this } expandByVector(t) { return this.min.sub(t), this.max.add(t), this } expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this } containsPoint(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y) } containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y } getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)) } intersectsBox(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y) } clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max) } distanceToPoint(t) { return this.clampPoint(t, po).distanceTo(t) } intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this } union(t) { return this.min.min(t.min), this.max.max(t.max), this } translate(t) { return this.min.add(t), this.max.add(t), this } equals(t) { return t.min.equals(this.min) && t.max.equals(this.max) } } class Sn { constructor() { this.type = "ShapePath", this.color = new Yt, this.subPaths = [], this.currentPath = null } moveTo(t, e) { return this.currentPath = new si, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this } lineTo(t, e) { return this.currentPath.lineTo(t, e), this } quadraticCurveTo(t, e, n, r) { return this.currentPath.quadraticCurveTo(t, e, n, r), this } bezierCurveTo(t, e, n, r, s, o) { return this.currentPath.bezierCurveTo(t, e, n, r, s, o), this } splineThru(t) { return this.currentPath.splineThru(t), this } toShapes(t) { function e(h) { const A = []; for (let v = 0, y = h.length; v < y; v++) { const U = h[v], P = new hr; P.curves = U.curves, A.push(P) } return A } function n(h, A) { const v = A.length; let y = !1; for (let U = v - 1, P = 0; P < v; U = P++) { let R = A[U], q = A[P], S = q.x - R.x, w = q.y - R.y; if (Math.abs(w) > Number.EPSILON) { if (w < 0 && (R = A[P], S = -S, q = A[U], w = -w), h.y < R.y || h.y > q.y) continue; if (h.y === R.y) { if (h.x === R.x) return !0 } else { const J = w * (h.x - R.x) - S * (h.y - R.y); if (J === 0) return !0; if (J < 0) continue; y = !y } } else { if (h.y !== R.y) continue; if (q.x <= h.x && h.x <= R.x || R.x <= h.x && h.x <= q.x) return !0 } } return y } const r = Tr.isClockWise, s = this.subPaths; if (s.length === 0) return []; let o, a, c; const l = []; if (s.length === 1) return a = s[0], c = new hr, c.curves = a.curves, l.push(c), l; let u = !r(s[0].getPoints()); u = t ? !u : u; const f = [], d = []; let g = [], _ = 0, x; d[_] = void 0, g[_] = []; for (let h = 0, A = s.length; h < A; h++)a = s[h], x = a.getPoints(), o = r(x), o = t ? !o : o, o ? (!u && d[_] && _++, d[_] = { s: new hr, p: x }, d[_].s.curves = a.curves, u && _++, g[_] = []) : g[_].push({ h: a, p: x[0] }); if (!d[0]) return e(s); if (d.length > 1) { let h = !1, A = 0; for (let v = 0, y = d.length; v < y; v++)f[v] = []; for (let v = 0, y = d.length; v < y; v++) { const U = g[v]; for (let P = 0; P < U.length; P++) { const R = U[P]; let q = !0; for (let S = 0; S < d.length; S++)n(R.p, d[S].p) && (v !== S && A++, q ? (q = !1, f[S].push(R)) : h = !0); q && f[v].push(R) } } A > 0 && h === !1 && (g = f) } let p; for (let h = 0, A = d.length; h < A; h++) { c = d[h].s, l.push(c), p = g[h]; for (let v = 0, y = p.length; v < y; v++)c.holes.push(p[v].h) } return l } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ss } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ss); const mo = { type: "change" }, cs = { type: "start" }, go = { type: "end" }, lr = new Oo, _o = new an, wm = Math.cos(70 * Ll.DEG2RAD); class Rm extends Dn { constructor(t, e) { super(), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z, this.cursor = new z, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: In.ROTATE, MIDDLE: In.DOLLY, RIGHT: In.PAN }, this.touches = { ONE: Nn.ROTATE, TWO: Nn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () { return a.phi }, this.getAzimuthalAngle = function () { return a.theta }, this.getDistance = function () { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function (L) { L.addEventListener("keydown", at), this._domElementKeyEvents = L }, this.stopListenToKeyEvents = function () { this._domElementKeyEvents.removeEventListener("keydown", at), this._domElementKeyEvents = null }, this.saveState = function () { n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom }, this.reset = function () { n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(mo), n.update(), s = r.NONE }, this.update = function () { const L = new z, ft = new Cn().setFromUnitVectors(t.up, new z(0, 1, 0)), Mt = ft.clone().invert(), gt = new z, Rt = new Cn, kt = new z, Xt = 2 * Math.PI; return function (St = null) { const O = n.object.position; L.copy(O).sub(n.target), L.applyQuaternion(ft), a.setFromVector3(L), n.autoRotate && s === r.NONE && J(S(St)), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi); let _t = n.minAzimuthAngle, xt = n.maxAzimuthAngle; isFinite(_t) && isFinite(xt) && (_t < -Math.PI ? _t += Xt : _t > Math.PI && (_t -= Xt), xt < -Math.PI ? xt += Xt : xt > Math.PI && (xt -= Xt), _t <= xt ? a.theta = Math.max(_t, Math.min(xt, a.theta)) : a.theta = a.theta > (_t + xt) / 2 ? Math.max(_t, a.theta) : Math.min(xt, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && P || n.object.isOrthographicCamera ? a.radius = it(a.radius) : a.radius = it(a.radius * l), L.setFromSpherical(a), L.applyQuaternion(Mt), O.copy(n.target).add(L), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0)); let Dt = !1; if (n.zoomToCursor && P) { let Ct = null; if (n.object.isPerspectiveCamera) { const qt = L.length(); Ct = it(qt * l); const jt = qt - Ct; n.object.position.addScaledVector(y, jt), n.object.updateMatrixWorld() } else if (n.object.isOrthographicCamera) { const qt = new z(U.x, U.y, 0); qt.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Dt = !0; const jt = new z(U.x, U.y, 0); jt.unproject(n.object), n.object.position.sub(jt).add(qt), n.object.updateMatrixWorld(), Ct = L.length() } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1; Ct !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Ct).add(n.object.position) : (lr.origin.copy(n.object.position), lr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(lr.direction)) < wm ? t.lookAt(n.target) : (_o.setFromNormalAndCoplanarPoint(n.object.up, n.target), lr.intersectPlane(_o, n.target)))) } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Dt = !0); return l = 1, P = !1, Dt || gt.distanceToSquared(n.object.position) > o || 8 * (1 - Rt.dot(n.object.quaternion)) > o || kt.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(mo), gt.copy(n.object.position), Rt.copy(n.object.quaternion), kt.copy(n.target), !0) : !1 } }(), this.dispose = function () { n.domElement.removeEventListener("contextmenu", bt), n.domElement.removeEventListener("pointerdown", F), n.domElement.removeEventListener("pointercancel", M), n.domElement.removeEventListener("wheel", ct), n.domElement.removeEventListener("pointermove", m), n.domElement.removeEventListener("pointerup", M), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", at), n._domElementKeyEvents = null) }; const n = this, r = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }; let s = r.NONE; const o = 1e-6, a = new fo, c = new fo; let l = 1; const u = new z, f = new dt, d = new dt, g = new dt, _ = new dt, x = new dt, p = new dt, h = new dt, A = new dt, v = new dt, y = new z, U = new dt; let P = !1; const R = [], q = {}; function S(L) { return L !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * L : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed } function w(L) { const ft = Math.abs(L) / (100 * (window.devicePixelRatio | 0)); return Math.pow(.95, n.zoomSpeed * ft) } function J(L) { c.theta -= L } function k(L) { c.phi -= L } const ut = function () { const L = new z; return function (Mt, gt) { L.setFromMatrixColumn(gt, 0), L.multiplyScalar(-Mt), u.add(L) } }(), N = function () { const L = new z; return function (Mt, gt) { n.screenSpacePanning === !0 ? L.setFromMatrixColumn(gt, 1) : (L.setFromMatrixColumn(gt, 0), L.crossVectors(n.object.up, L)), L.multiplyScalar(Mt), u.add(L) } }(), W = function () { const L = new z; return function (Mt, gt) { const Rt = n.domElement; if (n.object.isPerspectiveCamera) { const kt = n.object.position; L.copy(kt).sub(n.target); let Xt = L.length(); Xt *= Math.tan(n.object.fov / 2 * Math.PI / 180), ut(2 * Mt * Xt / Rt.clientHeight, n.object.matrix), N(2 * gt * Xt / Rt.clientHeight, n.object.matrix) } else n.object.isOrthographicCamera ? (ut(Mt * (n.object.right - n.object.left) / n.object.zoom / Rt.clientWidth, n.object.matrix), N(gt * (n.object.top - n.object.bottom) / n.object.zoom / Rt.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1) } }(); function Z(L) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= L : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function j(L) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= L : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function B(L, ft) { if (!n.zoomToCursor) return; P = !0; const Mt = n.domElement.getBoundingClientRect(), gt = L - Mt.left, Rt = ft - Mt.top, kt = Mt.width, Xt = Mt.height; U.x = gt / kt * 2 - 1, U.y = -(Rt / Xt) * 2 + 1, y.set(U.x, U.y, 1).unproject(n.object).sub(n.object.position).normalize() } function it(L) { return Math.max(n.minDistance, Math.min(n.maxDistance, L)) } function nt(L) { f.set(L.clientX, L.clientY) } function pt(L) { B(L.clientX, L.clientX), h.set(L.clientX, L.clientY) } function mt(L) { _.set(L.clientX, L.clientY) } function tt(L) { d.set(L.clientX, L.clientY), g.subVectors(d, f).multiplyScalar(n.rotateSpeed); const ft = n.domElement; J(2 * Math.PI * g.x / ft.clientHeight), k(2 * Math.PI * g.y / ft.clientHeight), f.copy(d), n.update() } function D(L) { A.set(L.clientX, L.clientY), v.subVectors(A, h), v.y > 0 ? Z(w(v.y)) : v.y < 0 && j(w(v.y)), h.copy(A), n.update() } function C(L) { x.set(L.clientX, L.clientY), p.subVectors(x, _).multiplyScalar(n.panSpeed), W(p.x, p.y), _.copy(x), n.update() } function b(L) { B(L.clientX, L.clientY), L.deltaY < 0 ? j(w(L.deltaY)) : L.deltaY > 0 && Z(w(L.deltaY)), n.update() } function E(L) { let ft = !1; switch (L.code) { case n.keys.UP: L.ctrlKey || L.metaKey || L.shiftKey ? k(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(0, n.keyPanSpeed), ft = !0; break; case n.keys.BOTTOM: L.ctrlKey || L.metaKey || L.shiftKey ? k(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(0, -n.keyPanSpeed), ft = !0; break; case n.keys.LEFT: L.ctrlKey || L.metaKey || L.shiftKey ? J(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(n.keyPanSpeed, 0), ft = !0; break; case n.keys.RIGHT: L.ctrlKey || L.metaKey || L.shiftKey ? J(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(-n.keyPanSpeed, 0), ft = !0; break }ft && (L.preventDefault(), n.update()) } function Y(L) { if (R.length === 1) f.set(L.pageX, L.pageY); else { const ft = Vt(L), Mt = .5 * (L.pageX + ft.x), gt = .5 * (L.pageY + ft.y); f.set(Mt, gt) } } function rt(L) { if (R.length === 1) _.set(L.pageX, L.pageY); else { const ft = Vt(L), Mt = .5 * (L.pageX + ft.x), gt = .5 * (L.pageY + ft.y); _.set(Mt, gt) } } function G(L) { const ft = Vt(L), Mt = L.pageX - ft.x, gt = L.pageY - ft.y, Rt = Math.sqrt(Mt * Mt + gt * gt); h.set(0, Rt) } function ot(L) { n.enableZoom && G(L), n.enablePan && rt(L) } function I(L) { n.enableZoom && G(L), n.enableRotate && Y(L) } function yt(L) { if (R.length == 1) d.set(L.pageX, L.pageY); else { const Mt = Vt(L), gt = .5 * (L.pageX + Mt.x), Rt = .5 * (L.pageY + Mt.y); d.set(gt, Rt) } g.subVectors(d, f).multiplyScalar(n.rotateSpeed); const ft = n.domElement; J(2 * Math.PI * g.x / ft.clientHeight), k(2 * Math.PI * g.y / ft.clientHeight), f.copy(d) } function X(L) { if (R.length === 1) x.set(L.pageX, L.pageY); else { const ft = Vt(L), Mt = .5 * (L.pageX + ft.x), gt = .5 * (L.pageY + ft.y); x.set(Mt, gt) } p.subVectors(x, _).multiplyScalar(n.panSpeed), W(p.x, p.y), _.copy(x) } function et(L) { const ft = Vt(L), Mt = L.pageX - ft.x, gt = L.pageY - ft.y, Rt = Math.sqrt(Mt * Mt + gt * gt); A.set(0, Rt), v.set(0, Math.pow(A.y / h.y, n.zoomSpeed)), Z(v.y), h.copy(A); const kt = (L.pageX + ft.x) * .5, Xt = (L.pageY + ft.y) * .5; B(kt, Xt) } function st(L) { n.enableZoom && et(L), n.enablePan && X(L) } function vt(L) { n.enableZoom && et(L), n.enableRotate && yt(L) } function F(L) { n.enabled !== !1 && (R.length === 0 && (n.domElement.setPointerCapture(L.pointerId), n.domElement.addEventListener("pointermove", m), n.domElement.addEventListener("pointerup", M)), Lt(L), L.pointerType === "touch" ? wt(L) : H(L)) } function m(L) { n.enabled !== !1 && (L.pointerType === "touch" ? Tt(L) : lt(L)) } function M(L) { It(L), R.length === 0 && (n.domElement.releasePointerCapture(L.pointerId), n.domElement.removeEventListener("pointermove", m), n.domElement.removeEventListener("pointerup", M)), n.dispatchEvent(go), s = r.NONE } function H(L) { let ft; switch (L.button) { case 0: ft = n.mouseButtons.LEFT; break; case 1: ft = n.mouseButtons.MIDDLE; break; case 2: ft = n.mouseButtons.RIGHT; break; default: ft = -1 }switch (ft) { case In.DOLLY: if (n.enableZoom === !1) return; pt(L), s = r.DOLLY; break; case In.ROTATE: if (L.ctrlKey || L.metaKey || L.shiftKey) { if (n.enablePan === !1) return; mt(L), s = r.PAN } else { if (n.enableRotate === !1) return; nt(L), s = r.ROTATE } break; case In.PAN: if (L.ctrlKey || L.metaKey || L.shiftKey) { if (n.enableRotate === !1) return; nt(L), s = r.ROTATE } else { if (n.enablePan === !1) return; mt(L), s = r.PAN } break; default: s = r.NONE }s !== r.NONE && n.dispatchEvent(cs) } function lt(L) { switch (s) { case r.ROTATE: if (n.enableRotate === !1) return; tt(L); break; case r.DOLLY: if (n.enableZoom === !1) return; D(L); break; case r.PAN: if (n.enablePan === !1) return; C(L); break } } function ct(L) { n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (L.preventDefault(), n.dispatchEvent(cs), b(L), n.dispatchEvent(go)) } function at(L) { n.enabled === !1 || n.enablePan === !1 || E(L) } function wt(L) { switch (ht(L), R.length) { case 1: switch (n.touches.ONE) { case Nn.ROTATE: if (n.enableRotate === !1) return; Y(L), s = r.TOUCH_ROTATE; break; case Nn.PAN: if (n.enablePan === !1) return; rt(L), s = r.TOUCH_PAN; break; default: s = r.NONE }break; case 2: switch (n.touches.TWO) { case Nn.DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; ot(L), s = r.TOUCH_DOLLY_PAN; break; case Nn.DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; I(L), s = r.TOUCH_DOLLY_ROTATE; break; default: s = r.NONE }break; default: s = r.NONE }s !== r.NONE && n.dispatchEvent(cs) } function Tt(L) { switch (ht(L), s) { case r.TOUCH_ROTATE: if (n.enableRotate === !1) return; yt(L), n.update(); break; case r.TOUCH_PAN: if (n.enablePan === !1) return; X(L), n.update(); break; case r.TOUCH_DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; st(L), n.update(); break; case r.TOUCH_DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; vt(L), n.update(); break; default: s = r.NONE } } function bt(L) { n.enabled !== !1 && L.preventDefault() } function Lt(L) { R.push(L.pointerId) } function It(L) { delete q[L.pointerId]; for (let ft = 0; ft < R.length; ft++)if (R[ft] == L.pointerId) { R.splice(ft, 1); return } } function ht(L) { let ft = q[L.pointerId]; ft === void 0 && (ft = new dt, q[L.pointerId] = ft), ft.set(L.pageX, L.pageY) } function Vt(L) { const ft = L.pointerId === R[0] ? R[1] : R[0]; return q[ft] } n.domElement.addEventListener("contextmenu", bt), n.domElement.addEventListener("pointerdown", F), n.domElement.addEventListener("pointercancel", M), n.domElement.addEventListener("wheel", ct, { passive: !1 }), this.update() } } const ai = new zp, Ms = document.querySelector("#container"), pn = new Qo; pn.setPixelRatio(Math.min(window.devicePixelRatio, 2)); pn.setSize(Ms.offsetWidth, Ms.offsetHeight); pn.shadowMap.enabled = !0; pn.shadowMap.type = vo; pn.physicallyCorrectLights = !0; Ms.appendChild(pn.domElement); const Ls = new we(45, window.innerWidth / window.innerHeight, 1, 1e4); Ls.position.set(0, 0, 500); new Rm(Ls, pn.domElement); let Cm = .5; const $n = { left: -250, right: 250, top: 250, bottom: -250, near: .5, far: 250 }, Pm = i => { i.shadow.camera.left = $n.left, i.shadow.camera.right = $n.right, i.shadow.camera.top = $n.top, i.shadow.camera.bottom = $n.bottom, i.shadow.camera.near = $n.near, i.shadow.camera.far = $n.far, i.shadow.mapSize.width = 8192, i.shadow.mapSize.height = 8192, i.castShadow = !0, i.shadow.camera.updateProjectionMatrix() }, Lm = () => { ai.add(new bm(16777215, 1)); const i = new Tm(16777215, 1); i.position.set(5, 5, 50), Pm(i), ai.add(i); const t = new ym(16777215, 1); t.position.set(5, 5, 150), t.angle = Math.PI / 6, t.penumbra = 1, t.decay = 0, t.distance = 200, t.castShadow = !0, t.shadow.mapSize.width = 8192, t.shadow.mapSize.height = 8192, t.shadow.camera.near = 1, t.shadow.camera.far = 200, t.shadow.focus = 1, t.shadow.camera.updateProjectionMatrix(), ai.add(t) }; function Dm(i = "paper") { return new Promise((t, e) => { const n = new Mm, s = Object.entries({ map: "color", displacementMap: "disp", normalMap: "norm", aoMap: "occ", roughnessMap: "rough" }).map(([o, a]) => { const c = `./textures/${i}/${a}`, l = `${c}.jpg`, u = `${c}.png`; return new Promise((f, d) => { n.load(l, g => { g.wrapS = g.wrapT = li, g.repeat.set(2, 2), f({ type: o, texture: g }) }, void 0, () => { n.load(u, g => { g.wrapS = g.wrapT = li, g.repeat.set(2, 2), f({ type: o, texture: g }) }, void 0, () => { d(`No texture found for map: ${o}`) }) }) }) }); Promise.all(s).then(o => { const a = {}; o.forEach(({ type: f, texture: d }) => { a[f] = d }); const c = new lc({ ...a, displacementScale: .5, side: Ne }), l = new Ui(500, 500), u = new He(l, c); u.receiveShadow = !0, u.position.z = -1, ai.add(u), t() }).catch(o => { console.error(o), e(o) }) }) } const Um = re; class Ds extends Ii { constructor(t) { super(t), this.defaultDPI = 90, this.defaultUnit = "px" } load(t, e, n, r) { const s = this, o = new xm(s.manager); o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(t, function (a) { try { e(s.parse(a)) } catch (c) { r ? r(c) : console.error(c), s.manager.itemError(t) } }, n, r) } parse(t) { const e = this; function n(D, C) { if (D.nodeType !== 1) return; const b = y(D); let E = !1, Y = null; switch (D.nodeName) { case "svg": C = _(D, C); break; case "style": s(D); break; case "g": C = _(D, C); break; case "path": C = _(D, C), D.hasAttribute("d") && (Y = r(D)); break; case "rect": C = _(D, C), Y = c(D); break; case "polygon": C = _(D, C), Y = l(D); break; case "polyline": C = _(D, C), Y = u(D); break; case "circle": C = _(D, C), Y = f(D); break; case "ellipse": C = _(D, C), Y = d(D); break; case "line": C = _(D, C), Y = g(D); break; case "defs": E = !0; break; case "use": C = _(D, C); const ot = (D.getAttributeNS("http://www.w3.org/1999/xlink", "href") || "").substring(1), I = D.viewportElement.getElementById(ot); I ? n(I, C) : console.warn("SVGLoader: 'use node' references non-existent node id: " + ot); break }Y && (C.fill !== void 0 && C.fill !== "none" && Y.color.setStyle(C.fill, Um), P(Y, pt), k.push(Y), Y.userData = { node: D, style: C }); const rt = D.childNodes; for (let G = 0; G < rt.length; G++) { const ot = rt[G]; E && ot.nodeName !== "style" && ot.nodeName !== "defs" || n(ot, C) } b && (N.pop(), N.length > 0 ? pt.copy(N[N.length - 1]) : pt.identity()) } function r(D) { const C = new Sn, b = new dt, E = new dt, Y = new dt; let rt = !0, G = !1; const ot = D.getAttribute("d"); if (ot === "" || ot === "none") return null; const I = ot.match(/[a-df-z][^a-df-z]*/ig); for (let yt = 0, X = I.length; yt < X; yt++) { const et = I[yt], st = et.charAt(0), vt = et.slice(1).trim(); rt === !0 && (G = !0, rt = !1); let F; switch (st) { case "M": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2)b.x = F[m + 0], b.y = F[m + 1], E.x = b.x, E.y = b.y, m === 0 ? C.moveTo(b.x, b.y) : C.lineTo(b.x, b.y), m === 0 && Y.copy(b); break; case "H": F = p(vt); for (let m = 0, M = F.length; m < M; m++)b.x = F[m], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "V": F = p(vt); for (let m = 0, M = F.length; m < M; m++)b.y = F[m], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "L": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2)b.x = F[m + 0], b.y = F[m + 1], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "C": F = p(vt); for (let m = 0, M = F.length; m < M; m += 6)C.bezierCurveTo(F[m + 0], F[m + 1], F[m + 2], F[m + 3], F[m + 4], F[m + 5]), E.x = F[m + 2], E.y = F[m + 3], b.x = F[m + 4], b.y = F[m + 5], m === 0 && G === !0 && Y.copy(b); break; case "S": F = p(vt); for (let m = 0, M = F.length; m < M; m += 4)C.bezierCurveTo(x(b.x, E.x), x(b.y, E.y), F[m + 0], F[m + 1], F[m + 2], F[m + 3]), E.x = F[m + 0], E.y = F[m + 1], b.x = F[m + 2], b.y = F[m + 3], m === 0 && G === !0 && Y.copy(b); break; case "Q": F = p(vt); for (let m = 0, M = F.length; m < M; m += 4)C.quadraticCurveTo(F[m + 0], F[m + 1], F[m + 2], F[m + 3]), E.x = F[m + 0], E.y = F[m + 1], b.x = F[m + 2], b.y = F[m + 3], m === 0 && G === !0 && Y.copy(b); break; case "T": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2) { const H = x(b.x, E.x), lt = x(b.y, E.y); C.quadraticCurveTo(H, lt, F[m + 0], F[m + 1]), E.x = H, E.y = lt, b.x = F[m + 0], b.y = F[m + 1], m === 0 && G === !0 && Y.copy(b) } break; case "A": F = p(vt, [3, 4], 7); for (let m = 0, M = F.length; m < M; m += 7) { if (F[m + 5] == b.x && F[m + 6] == b.y) continue; const H = b.clone(); b.x = F[m + 5], b.y = F[m + 6], E.x = b.x, E.y = b.y, o(C, F[m], F[m + 1], F[m + 2], F[m + 3], F[m + 4], H, b), m === 0 && G === !0 && Y.copy(b) } break; case "m": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2)b.x += F[m + 0], b.y += F[m + 1], E.x = b.x, E.y = b.y, m === 0 ? C.moveTo(b.x, b.y) : C.lineTo(b.x, b.y), m === 0 && Y.copy(b); break; case "h": F = p(vt); for (let m = 0, M = F.length; m < M; m++)b.x += F[m], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "v": F = p(vt); for (let m = 0, M = F.length; m < M; m++)b.y += F[m], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "l": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2)b.x += F[m + 0], b.y += F[m + 1], E.x = b.x, E.y = b.y, C.lineTo(b.x, b.y), m === 0 && G === !0 && Y.copy(b); break; case "c": F = p(vt); for (let m = 0, M = F.length; m < M; m += 6)C.bezierCurveTo(b.x + F[m + 0], b.y + F[m + 1], b.x + F[m + 2], b.y + F[m + 3], b.x + F[m + 4], b.y + F[m + 5]), E.x = b.x + F[m + 2], E.y = b.y + F[m + 3], b.x += F[m + 4], b.y += F[m + 5], m === 0 && G === !0 && Y.copy(b); break; case "s": F = p(vt); for (let m = 0, M = F.length; m < M; m += 4)C.bezierCurveTo(x(b.x, E.x), x(b.y, E.y), b.x + F[m + 0], b.y + F[m + 1], b.x + F[m + 2], b.y + F[m + 3]), E.x = b.x + F[m + 0], E.y = b.y + F[m + 1], b.x += F[m + 2], b.y += F[m + 3], m === 0 && G === !0 && Y.copy(b); break; case "q": F = p(vt); for (let m = 0, M = F.length; m < M; m += 4)C.quadraticCurveTo(b.x + F[m + 0], b.y + F[m + 1], b.x + F[m + 2], b.y + F[m + 3]), E.x = b.x + F[m + 0], E.y = b.y + F[m + 1], b.x += F[m + 2], b.y += F[m + 3], m === 0 && G === !0 && Y.copy(b); break; case "t": F = p(vt); for (let m = 0, M = F.length; m < M; m += 2) { const H = x(b.x, E.x), lt = x(b.y, E.y); C.quadraticCurveTo(H, lt, b.x + F[m + 0], b.y + F[m + 1]), E.x = H, E.y = lt, b.x = b.x + F[m + 0], b.y = b.y + F[m + 1], m === 0 && G === !0 && Y.copy(b) } break; case "a": F = p(vt, [3, 4], 7); for (let m = 0, M = F.length; m < M; m += 7) { if (F[m + 5] == 0 && F[m + 6] == 0) continue; const H = b.clone(); b.x += F[m + 5], b.y += F[m + 6], E.x = b.x, E.y = b.y, o(C, F[m], F[m + 1], F[m + 2], F[m + 3], F[m + 4], H, b), m === 0 && G === !0 && Y.copy(b) } break; case "Z": case "z": C.currentPath.autoClose = !0, C.currentPath.curves.length > 0 && (b.copy(Y), C.currentPath.currentPoint.copy(b), rt = !0); break; default: console.warn(et) }G = !1 } return C } function s(D) { if (!(!D.sheet || !D.sheet.cssRules || !D.sheet.cssRules.length)) for (let C = 0; C < D.sheet.cssRules.length; C++) { const b = D.sheet.cssRules[C]; if (b.type !== 1) continue; const E = b.selectorText.split(/,/gm).filter(Boolean).map(Y => Y.trim()); for (let Y = 0; Y < E.length; Y++) { const rt = Object.fromEntries(Object.entries(b.style).filter(([, G]) => G !== "")); ut[E[Y]] = Object.assign(ut[E[Y]] || {}, rt) } } } function o(D, C, b, E, Y, rt, G, ot) { if (C == 0 || b == 0) { D.lineTo(ot.x, ot.y); return } E = E * Math.PI / 180, C = Math.abs(C), b = Math.abs(b); const I = (G.x - ot.x) / 2, yt = (G.y - ot.y) / 2, X = Math.cos(E) * I + Math.sin(E) * yt, et = -Math.sin(E) * I + Math.cos(E) * yt; let st = C * C, vt = b * b; const F = X * X, m = et * et, M = F / st + m / vt; if (M > 1) { const ht = Math.sqrt(M); C = ht * C, b = ht * b, st = C * C, vt = b * b } const H = st * m + vt * F, lt = (st * vt - H) / H; let ct = Math.sqrt(Math.max(0, lt)); Y === rt && (ct = -ct); const at = ct * C * et / b, wt = -ct * b * X / C, Tt = Math.cos(E) * at - Math.sin(E) * wt + (G.x + ot.x) / 2, bt = Math.sin(E) * at + Math.cos(E) * wt + (G.y + ot.y) / 2, Lt = a(1, 0, (X - at) / C, (et - wt) / b), It = a((X - at) / C, (et - wt) / b, (-X - at) / C, (-et - wt) / b) % (Math.PI * 2); D.currentPath.absellipse(Tt, bt, C, b, Lt, Lt + It, rt === 0, E) } function a(D, C, b, E) { const Y = D * b + C * E, rt = Math.sqrt(D * D + C * C) * Math.sqrt(b * b + E * E); let G = Math.acos(Math.max(-1, Math.min(1, Y / rt))); return D * E - C * b < 0 && (G = -G), G } function c(D) { const C = v(D.getAttribute("x") || 0), b = v(D.getAttribute("y") || 0), E = v(D.getAttribute("rx") || D.getAttribute("ry") || 0), Y = v(D.getAttribute("ry") || D.getAttribute("rx") || 0), rt = v(D.getAttribute("width")), G = v(D.getAttribute("height")), ot = 1 - .551915024494, I = new Sn; return I.moveTo(C + E, b), I.lineTo(C + rt - E, b), (E !== 0 || Y !== 0) && I.bezierCurveTo(C + rt - E * ot, b, C + rt, b + Y * ot, C + rt, b + Y), I.lineTo(C + rt, b + G - Y), (E !== 0 || Y !== 0) && I.bezierCurveTo(C + rt, b + G - Y * ot, C + rt - E * ot, b + G, C + rt - E, b + G), I.lineTo(C + E, b + G), (E !== 0 || Y !== 0) && I.bezierCurveTo(C + E * ot, b + G, C, b + G - Y * ot, C, b + G - Y), I.lineTo(C, b + Y), (E !== 0 || Y !== 0) && I.bezierCurveTo(C, b + Y * ot, C + E * ot, b, C + E, b), I } function l(D) { function C(rt, G, ot) { const I = v(G), yt = v(ot); Y === 0 ? E.moveTo(I, yt) : E.lineTo(I, yt), Y++ } const b = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, E = new Sn; let Y = 0; return D.getAttribute("points").replace(b, C), E.currentPath.autoClose = !0, E } function u(D) { function C(rt, G, ot) { const I = v(G), yt = v(ot); Y === 0 ? E.moveTo(I, yt) : E.lineTo(I, yt), Y++ } const b = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, E = new Sn; let Y = 0; return D.getAttribute("points").replace(b, C), E.currentPath.autoClose = !1, E } function f(D) { const C = v(D.getAttribute("cx") || 0), b = v(D.getAttribute("cy") || 0), E = v(D.getAttribute("r") || 0), Y = new si; Y.absarc(C, b, E, 0, Math.PI * 2); const rt = new Sn; return rt.subPaths.push(Y), rt } function d(D) { const C = v(D.getAttribute("cx") || 0), b = v(D.getAttribute("cy") || 0), E = v(D.getAttribute("rx") || 0), Y = v(D.getAttribute("ry") || 0), rt = new si; rt.absellipse(C, b, E, Y, 0, Math.PI * 2); const G = new Sn; return G.subPaths.push(rt), G } function g(D) { const C = v(D.getAttribute("x1") || 0), b = v(D.getAttribute("y1") || 0), E = v(D.getAttribute("x2") || 0), Y = v(D.getAttribute("y2") || 0), rt = new Sn; return rt.moveTo(C, b), rt.lineTo(E, Y), rt.currentPath.autoClose = !1, rt } function _(D, C) { C = Object.assign({}, C); let b = {}; if (D.hasAttribute("class")) { const G = D.getAttribute("class").split(/\s/).filter(Boolean).map(ot => ot.trim()); for (let ot = 0; ot < G.length; ot++)b = Object.assign(b, ut["." + G[ot]]) } D.hasAttribute("id") && (b = Object.assign(b, ut["#" + D.getAttribute("id")])); function E(G, ot, I) { I === void 0 && (I = function (X) { return X.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), X }), D.hasAttribute(G) && (C[ot] = I(D.getAttribute(G))), b[G] && (C[ot] = I(b[G])), D.style && D.style[G] !== "" && (C[ot] = I(D.style[G])) } function Y(G) { return Math.max(0, Math.min(1, v(G))) } function rt(G) { return Math.max(0, v(G)) } return E("fill", "fill"), E("fill-opacity", "fillOpacity", Y), E("fill-rule", "fillRule"), E("opacity", "opacity", Y), E("stroke", "stroke"), E("stroke-opacity", "strokeOpacity", Y), E("stroke-width", "strokeWidth", rt), E("stroke-linejoin", "strokeLineJoin"), E("stroke-linecap", "strokeLineCap"), E("stroke-miterlimit", "strokeMiterLimit", rt), E("visibility", "visibility"), C } function x(D, C) { return D - (C - D) } function p(D, C, b) { if (typeof D != "string") throw new TypeError("Invalid input: " + typeof D); const E = { SEPARATOR: /[ \t\r\n\,.\-+]/, WHITESPACE: /[ \t\r\n]/, DIGIT: /[\d]/, SIGN: /[-+]/, POINT: /\./, COMMA: /,/, EXP: /e/i, FLAGS: /[01]/ }, Y = 0, rt = 1, G = 2, ot = 3; let I = Y, yt = !0, X = "", et = ""; const st = []; function vt(H, lt, ct) { const at = new SyntaxError('Unexpected character "' + H + '" at index ' + lt + "."); throw at.partial = ct, at } function F() { X !== "" && (et === "" ? st.push(Number(X)) : st.push(Number(X) * Math.pow(10, Number(et)))), X = "", et = "" } let m; const M = D.length; for (let H = 0; H < M; H++) { if (m = D[H], Array.isArray(C) && C.includes(st.length % b) && E.FLAGS.test(m)) { I = rt, X = m, F(); continue } if (I === Y) { if (E.WHITESPACE.test(m)) continue; if (E.DIGIT.test(m) || E.SIGN.test(m)) { I = rt, X = m; continue } if (E.POINT.test(m)) { I = G, X = m; continue } E.COMMA.test(m) && (yt && vt(m, H, st), yt = !0) } if (I === rt) { if (E.DIGIT.test(m)) { X += m; continue } if (E.POINT.test(m)) { X += m, I = G; continue } if (E.EXP.test(m)) { I = ot; continue } E.SIGN.test(m) && X.length === 1 && E.SIGN.test(X[0]) && vt(m, H, st) } if (I === G) { if (E.DIGIT.test(m)) { X += m; continue } if (E.EXP.test(m)) { I = ot; continue } E.POINT.test(m) && X[X.length - 1] === "." && vt(m, H, st) } if (I === ot) { if (E.DIGIT.test(m)) { et += m; continue } if (E.SIGN.test(m)) { if (et === "") { et += m; continue } et.length === 1 && E.SIGN.test(et) && vt(m, H, st) } } E.WHITESPACE.test(m) ? (F(), I = Y, yt = !1) : E.COMMA.test(m) ? (F(), I = Y, yt = !0) : E.SIGN.test(m) ? (F(), I = rt, X = m) : E.POINT.test(m) ? (F(), I = G, X = m) : vt(m, H, st) } return F(), st } const h = ["mm", "cm", "in", "pt", "pc", "px"], A = { mm: { mm: 1, cm: .1, in: 1 / 25.4, pt: 72 / 25.4, pc: 6 / 25.4, px: -1 }, cm: { mm: 10, cm: 1, in: 1 / 2.54, pt: 72 / 2.54, pc: 6 / 2.54, px: -1 }, in: { mm: 25.4, cm: 2.54, in: 1, pt: 72, pc: 6, px: -1 }, pt: { mm: 25.4 / 72, cm: 2.54 / 72, in: 1 / 72, pt: 1, pc: 6 / 72, px: -1 }, pc: { mm: 25.4 / 6, cm: 2.54 / 6, in: 1 / 6, pt: 72 / 6, pc: 1, px: -1 }, px: { px: 1 } }; function v(D) { let C = "px"; if (typeof D == "string" || D instanceof String) for (let E = 0, Y = h.length; E < Y; E++) { const rt = h[E]; if (D.endsWith(rt)) { C = rt, D = D.substring(0, D.length - rt.length); break } } let b; return C === "px" && e.defaultUnit !== "px" ? b = A.in[e.defaultUnit] / e.defaultDPI : (b = A[C][e.defaultUnit], b < 0 && (b = A[C].in * e.defaultDPI)), b * parseFloat(D) } function y(D) { if (!(D.hasAttribute("transform") || D.nodeName === "use" && (D.hasAttribute("x") || D.hasAttribute("y")))) return null; const C = U(D); return N.length > 0 && C.premultiply(N[N.length - 1]), pt.copy(C), N.push(C), C } function U(D) { const C = new Ot, b = W; if (D.nodeName === "use" && (D.hasAttribute("x") || D.hasAttribute("y"))) { const E = v(D.getAttribute("x")), Y = v(D.getAttribute("y")); C.translate(E, Y) } if (D.hasAttribute("transform")) { const E = D.getAttribute("transform").split(")"); for (let Y = E.length - 1; Y >= 0; Y--) { const rt = E[Y].trim(); if (rt === "") continue; const G = rt.indexOf("("), ot = rt.length; if (G > 0 && G < ot) { const I = rt.slice(0, G), yt = p(rt.slice(G + 1)); switch (b.identity(), I) { case "translate": if (yt.length >= 1) { const X = yt[0]; let et = 0; yt.length >= 2 && (et = yt[1]), b.translate(X, et) } break; case "rotate": if (yt.length >= 1) { let X = 0, et = 0, st = 0; X = yt[0] * Math.PI / 180, yt.length >= 3 && (et = yt[1], st = yt[2]), Z.makeTranslation(-et, -st), j.makeRotation(X), B.multiplyMatrices(j, Z), Z.makeTranslation(et, st), b.multiplyMatrices(Z, B) } break; case "scale": if (yt.length >= 1) { const X = yt[0]; let et = X; yt.length >= 2 && (et = yt[1]), b.scale(X, et) } break; case "skewX": yt.length === 1 && b.set(1, Math.tan(yt[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1); break; case "skewY": yt.length === 1 && b.set(1, 0, 0, Math.tan(yt[0] * Math.PI / 180), 1, 0, 0, 0, 1); break; case "matrix": yt.length === 6 && b.set(yt[0], yt[2], yt[4], yt[1], yt[3], yt[5], 0, 0, 1); break } } C.premultiply(b) } } return C } function P(D, C) { function b(G) { nt.set(G.x, G.y, 1).applyMatrix3(C), G.set(nt.x, nt.y) } function E(G) { const ot = G.xRadius, I = G.yRadius, yt = Math.cos(G.aRotation), X = Math.sin(G.aRotation), et = new z(ot * yt, ot * X, 0), st = new z(-I * X, I * yt, 0), vt = et.applyMatrix3(C), F = st.applyMatrix3(C), m = W.set(vt.x, F.x, 0, vt.y, F.y, 0, 0, 0, 1), M = Z.copy(m).invert(), ct = j.copy(M).transpose().multiply(M).elements, at = J(ct[0], ct[1], ct[4]), wt = Math.sqrt(at.rt1), Tt = Math.sqrt(at.rt2); if (G.xRadius = 1 / wt, G.yRadius = 1 / Tt, G.aRotation = Math.atan2(at.sn, at.cs), !((G.aEndAngle - G.aStartAngle) % (2 * Math.PI) < Number.EPSILON)) { const Lt = Z.set(wt, 0, 0, 0, Tt, 0, 0, 0, 1), It = j.set(at.cs, at.sn, 0, -at.sn, at.cs, 0, 0, 0, 1), ht = Lt.multiply(It).multiply(m), Vt = L => { const { x: ft, y: Mt } = new z(Math.cos(L), Math.sin(L), 0).applyMatrix3(ht); return Math.atan2(Mt, ft) }; G.aStartAngle = Vt(G.aStartAngle), G.aEndAngle = Vt(G.aEndAngle), R(C) && (G.aClockwise = !G.aClockwise) } } function Y(G) { const ot = S(C), I = w(C); G.xRadius *= ot, G.yRadius *= I; const yt = ot > Number.EPSILON ? Math.atan2(C.elements[1], C.elements[0]) : Math.atan2(-C.elements[3], C.elements[4]); G.aRotation += yt, R(C) && (G.aStartAngle *= -1, G.aEndAngle *= -1, G.aClockwise = !G.aClockwise) } const rt = D.subPaths; for (let G = 0, ot = rt.length; G < ot; G++) { const yt = rt[G].curves; for (let X = 0; X < yt.length; X++) { const et = yt[X]; et.isLineCurve ? (b(et.v1), b(et.v2)) : et.isCubicBezierCurve ? (b(et.v0), b(et.v1), b(et.v2), b(et.v3)) : et.isQuadraticBezierCurve ? (b(et.v0), b(et.v1), b(et.v2)) : et.isEllipseCurve && (it.set(et.aX, et.aY), b(it), et.aX = it.x, et.aY = it.y, q(C) ? E(et) : Y(et)) } } } function R(D) { const C = D.elements; return C[0] * C[4] - C[1] * C[3] < 0 } function q(D) { const C = D.elements, b = C[0] * C[3] + C[1] * C[4]; if (b === 0) return !1; const E = S(D), Y = w(D); return Math.abs(b / (E * Y)) > Number.EPSILON } function S(D) { const C = D.elements; return Math.sqrt(C[0] * C[0] + C[1] * C[1]) } function w(D) { const C = D.elements; return Math.sqrt(C[3] * C[3] + C[4] * C[4]) } function J(D, C, b) { let E, Y, rt, G, ot; const I = D + b, yt = D - b, X = Math.sqrt(yt * yt + 4 * C * C); return I > 0 ? (E = .5 * (I + X), ot = 1 / E, Y = D * ot * b - C * ot * C) : I < 0 ? Y = .5 * (I - X) : (E = .5 * X, Y = -.5 * X), yt > 0 ? rt = yt + X : rt = yt - X, Math.abs(rt) > 2 * Math.abs(C) ? (ot = -2 * C / rt, G = 1 / Math.sqrt(1 + ot * ot), rt = ot * G) : Math.abs(C) === 0 ? (rt = 1, G = 0) : (ot = -.5 * rt / C, rt = 1 / Math.sqrt(1 + ot * ot), G = ot * rt), yt > 0 && (ot = rt, rt = -G, G = ot), { rt1: E, rt2: Y, cs: rt, sn: G } } const k = [], ut = {}, N = [], W = new Ot, Z = new Ot, j = new Ot, B = new Ot, it = new dt, nt = new z, pt = new Ot, mt = new DOMParser().parseFromString(t, "image/svg+xml"); return n(mt.documentElement, { fill: "#000", fillOpacity: 1, strokeOpacity: 1, strokeWidth: 1, strokeLineJoin: "miter", strokeLineCap: "butt", strokeMiterLimit: 4 }), { paths: k, xml: mt.documentElement } } static createShapes(t) { const n = { ORIGIN: 0, DESTINATION: 1, BETWEEN: 2, LEFT: 3, RIGHT: 4, BEHIND: 5, BEYOND: 6 }, r = { loc: n.ORIGIN, t: 0 }; function s(x, p, h, A) { const v = x.x, y = p.x, U = h.x, P = A.x, R = x.y, q = p.y, S = h.y, w = A.y, J = (P - U) * (R - S) - (w - S) * (v - U), k = (y - v) * (R - S) - (q - R) * (v - U), ut = (w - S) * (y - v) - (P - U) * (q - R), N = J / ut, W = k / ut; if (ut === 0 && J !== 0 || N <= 0 || N >= 1 || W < 0 || W > 1) return null; if (J === 0 && ut === 0) { for (let Z = 0; Z < 2; Z++)if (o(Z === 0 ? h : A, x, p), r.loc == n.ORIGIN) { const j = Z === 0 ? h : A; return { x: j.x, y: j.y, t: r.t } } else if (r.loc == n.BETWEEN) { const j = +(v + r.t * (y - v)).toPrecision(10), B = +(R + r.t * (q - R)).toPrecision(10); return { x: j, y: B, t: r.t } } return null } else { for (let B = 0; B < 2; B++)if (o(B === 0 ? h : A, x, p), r.loc == n.ORIGIN) { const it = B === 0 ? h : A; return { x: it.x, y: it.y, t: r.t } } const Z = +(v + N * (y - v)).toPrecision(10), j = +(R + N * (q - R)).toPrecision(10); return { x: Z, y: j, t: N } } } function o(x, p, h) { const A = h.x - p.x, v = h.y - p.y, y = x.x - p.x, U = x.y - p.y, P = A * U - y * v; if (x.x === p.x && x.y === p.y) { r.loc = n.ORIGIN, r.t = 0; return } if (x.x === h.x && x.y === h.y) { r.loc = n.DESTINATION, r.t = 1; return } if (P < -Number.EPSILON) { r.loc = n.LEFT; return } if (P > Number.EPSILON) { r.loc = n.RIGHT; return } if (A * y < 0 || v * U < 0) { r.loc = n.BEHIND; return } if (Math.sqrt(A * A + v * v) < Math.sqrt(y * y + U * U)) { r.loc = n.BEYOND; return } let R; A !== 0 ? R = y / A : R = U / v, r.loc = n.BETWEEN, r.t = R } function a(x, p) { const h = [], A = []; for (let v = 1; v < x.length; v++) { const y = x[v - 1], U = x[v]; for (let P = 1; P < p.length; P++) { const R = p[P - 1], q = p[P], S = s(y, U, R, q); S !== null && h.find(w => w.t <= S.t + Number.EPSILON && w.t >= S.t - Number.EPSILON) === void 0 && (h.push(S), A.push(new dt(S.x, S.y))) } } return A } function c(x, p, h) { const A = new dt; p.getCenter(A); const v = []; return h.forEach(y => { y.boundingBox.containsPoint(A) && a(x, y.points).forEach(P => { v.push({ identifier: y.identifier, isCW: y.isCW, point: P }) }) }), v.sort((y, U) => y.point.x - U.point.x), v } function l(x, p, h, A, v) { (v == null || v === "") && (v = "nonzero"); const y = new dt; x.boundingBox.getCenter(y); const U = [new dt(h, y.y), new dt(A, y.y)], P = c(U, x.boundingBox, p); P.sort((k, ut) => k.point.x - ut.point.x); const R = [], q = []; P.forEach(k => { k.identifier === x.identifier ? R.push(k) : q.push(k) }); const S = R[0].point.x, w = []; let J = 0; for (; J < q.length && q[J].point.x < S;)w.length > 0 && w[w.length - 1] === q[J].identifier ? w.pop() : w.push(q[J].identifier), J++; if (w.push(x.identifier), v === "evenodd") { const k = w.length % 2 === 0, ut = w[w.length - 2]; return { identifier: x.identifier, isHole: k, for: ut } } else if (v === "nonzero") { let k = !0, ut = null, N = null; for (let W = 0; W < w.length; W++) { const Z = w[W]; k ? (N = p[Z].isCW, k = !1, ut = Z) : N !== p[Z].isCW && (N = p[Z].isCW, k = !0) } return { identifier: x.identifier, isHole: k, for: ut } } else console.warn('fill-rule: "' + v + '" is currently not implemented.') } let u = 999999999, f = -999999999, d = t.subPaths.map(x => { const p = x.getPoints(); let h = -999999999, A = 999999999, v = -999999999, y = 999999999; for (let U = 0; U < p.length; U++) { const P = p[U]; P.y > h && (h = P.y), P.y < A && (A = P.y), P.x > v && (v = P.x), P.x < y && (y = P.x) } return f <= v && (f = v + 1), u >= y && (u = y - 1), { curves: x.curves, points: p, isCW: Tr.isClockWise(p), identifier: -1, boundingBox: new Am(new dt(y, A), new dt(v, h)) } }); d = d.filter(x => x.points.length > 1); for (let x = 0; x < d.length; x++)d[x].identifier = x; const g = d.map(x => l(x, d, u, f, t.userData ? t.userData.style.fillRule : void 0)), _ = []; return d.forEach(x => { if (!g[x.identifier].isHole) { const h = new hr; h.curves = x.curves, g.filter(v => v.isHole && v.for === x.identifier).forEach(v => { const y = d[v.identifier], U = new si; U.curves = y.curves, h.holes.push(U) }), _.push(h) } }), _ } static getStrokeStyle(t, e, n, r, s) { return t = t !== void 0 ? t : 1, e = e !== void 0 ? e : "#000", n = n !== void 0 ? n : "miter", r = r !== void 0 ? r : "butt", s = s !== void 0 ? s : 4, { strokeColor: e, strokeWidth: t, strokeLineJoin: n, strokeLineCap: r, strokeMiterLimit: s } } static pointsToStroke(t, e, n, r) { const s = [], o = [], a = []; if (Ds.pointsToStrokeWithBuffers(t, e, n, r, s, o, a) === 0) return null; const c = new dn; return c.setAttribute("position", new Ve(s, 3)), c.setAttribute("normal", new Ve(o, 3)), c.setAttribute("uv", new Ve(a, 2)), c } static pointsToStrokeWithBuffers(t, e, n, r, s, o, a, c) { const l = new dt, u = new dt, f = new dt, d = new dt, g = new dt, _ = new dt, x = new dt, p = new dt, h = new dt, A = new dt, v = new dt, y = new dt, U = new dt, P = new dt, R = new dt, q = new dt, S = new dt; n = n !== void 0 ? n : 12, r = r !== void 0 ? r : .001, c = c !== void 0 ? c : 0, t = yt(t); const w = t.length; if (w < 2) return 0; const J = t[0].equals(t[w - 1]); let k, ut = t[0], N; const W = e.strokeWidth / 2, Z = 1 / (w - 1); let j = 0, B, it, nt, pt, mt = !1, tt = 0, D = c * 3, C = c * 2; b(t[0], t[1], l).multiplyScalar(W), p.copy(t[0]).sub(l), h.copy(t[0]).add(l), A.copy(p), v.copy(h); for (let X = 1; X < w; X++) { k = t[X], X === w - 1 ? J ? N = t[1] : N = void 0 : N = t[X + 1]; const et = l; if (b(ut, k, et), f.copy(et).multiplyScalar(W), y.copy(k).sub(f), U.copy(k).add(f), B = j + Z, it = !1, N !== void 0) { b(k, N, u), f.copy(u).multiplyScalar(W), P.copy(k).sub(f), R.copy(k).add(f), nt = !0, f.subVectors(N, ut), et.dot(f) < 0 && (nt = !1), X === 1 && (mt = nt), f.subVectors(N, k), f.normalize(); const st = Math.abs(et.dot(f)); if (st > Number.EPSILON) { const vt = W / st; f.multiplyScalar(-vt), d.subVectors(k, ut), g.copy(d).setLength(vt).add(f), q.copy(g).negate(); const F = g.length(), m = d.length(); d.divideScalar(m), _.subVectors(N, k); const M = _.length(); switch (_.divideScalar(M), d.dot(q) < m && _.dot(q) < M && (it = !0), S.copy(g).add(k), q.add(k), pt = !1, it ? nt ? (R.copy(q), U.copy(q)) : (P.copy(q), y.copy(q)) : rt(), e.strokeLineJoin) { case "bevel": G(nt, it, B); break; case "round": ot(nt, it), nt ? Y(k, y, P, B, 0) : Y(k, R, U, B, 1); break; case "miter": case "miter-clip": default: const H = W * e.strokeMiterLimit / F; if (H < 1) if (e.strokeLineJoin !== "miter-clip") { G(nt, it, B); break } else ot(nt, it), nt ? (_.subVectors(S, y).multiplyScalar(H).add(y), x.subVectors(S, P).multiplyScalar(H).add(P), E(y, B, 0), E(_, B, 0), E(k, B, .5), E(k, B, .5), E(_, B, 0), E(x, B, 0), E(k, B, .5), E(x, B, 0), E(P, B, 0)) : (_.subVectors(S, U).multiplyScalar(H).add(U), x.subVectors(S, R).multiplyScalar(H).add(R), E(U, B, 1), E(_, B, 1), E(k, B, .5), E(k, B, .5), E(_, B, 1), E(x, B, 1), E(k, B, .5), E(x, B, 1), E(R, B, 1)); else it ? (nt ? (E(h, j, 1), E(p, j, 0), E(S, B, 0), E(h, j, 1), E(S, B, 0), E(q, B, 1)) : (E(h, j, 1), E(p, j, 0), E(S, B, 1), E(p, j, 0), E(q, B, 0), E(S, B, 1)), nt ? P.copy(S) : R.copy(S)) : nt ? (E(y, B, 0), E(S, B, 0), E(k, B, .5), E(k, B, .5), E(S, B, 0), E(P, B, 0)) : (E(U, B, 1), E(S, B, 1), E(k, B, .5), E(k, B, .5), E(S, B, 1), E(R, B, 1)), pt = !0; break } } else rt() } else rt(); !J && X === w - 1 && I(t[0], A, v, nt, !0, j), j = B, ut = k, p.copy(P), h.copy(R) } if (!J) I(k, y, U, nt, !1, B); else if (it && s) { let X = S, et = q; mt !== nt && (X = q, et = S), nt ? (pt || mt) && (et.toArray(s, 0 * 3), et.toArray(s, 3 * 3), pt && X.toArray(s, 1 * 3)) : (pt || !mt) && (et.toArray(s, 1 * 3), et.toArray(s, 3 * 3), pt && X.toArray(s, 0 * 3)) } return tt; function b(X, et, st) { return st.subVectors(et, X), st.set(-st.y, st.x).normalize() } function E(X, et, st) { s && (s[D] = X.x, s[D + 1] = X.y, s[D + 2] = 0, o && (o[D] = 0, o[D + 1] = 0, o[D + 2] = 1), D += 3, a && (a[C] = et, a[C + 1] = st, C += 2)), tt += 3 } function Y(X, et, st, vt, F) { l.copy(et).sub(X).normalize(), u.copy(st).sub(X).normalize(); let m = Math.PI; const M = l.dot(u); Math.abs(M) < 1 && (m = Math.abs(Math.acos(M))), m /= n, f.copy(et); for (let H = 0, lt = n - 1; H < lt; H++)d.copy(f).rotateAround(X, m), E(f, vt, F), E(d, vt, F), E(X, vt, .5), f.copy(d); E(d, vt, F), E(st, vt, F), E(X, vt, .5) } function rt() { E(h, j, 1), E(p, j, 0), E(y, B, 0), E(h, j, 1), E(y, B, 1), E(U, B, 0) } function G(X, et, st) { et ? X ? (E(h, j, 1), E(p, j, 0), E(y, B, 0), E(h, j, 1), E(y, B, 0), E(q, B, 1), E(y, st, 0), E(P, st, 0), E(q, st, .5)) : (E(h, j, 1), E(p, j, 0), E(U, B, 1), E(p, j, 0), E(q, B, 0), E(U, B, 1), E(U, st, 1), E(q, st, 0), E(R, st, 1)) : X ? (E(y, st, 0), E(P, st, 0), E(k, st, .5)) : (E(U, st, 1), E(R, st, 0), E(k, st, .5)) } function ot(X, et) { et && (X ? (E(h, j, 1), E(p, j, 0), E(y, B, 0), E(h, j, 1), E(y, B, 0), E(q, B, 1), E(y, j, 0), E(k, B, .5), E(q, B, 1), E(k, B, .5), E(P, j, 0), E(q, B, 1)) : (E(h, j, 1), E(p, j, 0), E(U, B, 1), E(p, j, 0), E(q, B, 0), E(U, B, 1), E(U, j, 1), E(q, B, 0), E(k, B, .5), E(k, B, .5), E(q, B, 0), E(R, j, 1))) } function I(X, et, st, vt, F, m) { switch (e.strokeLineCap) { case "round": F ? Y(X, st, et, m, .5) : Y(X, et, st, m, .5); break; case "square": if (F) l.subVectors(et, X), u.set(l.y, -l.x), f.addVectors(l, u).add(X), d.subVectors(u, l).add(X), vt ? (f.toArray(s, 1 * 3), d.toArray(s, 0 * 3), d.toArray(s, 3 * 3)) : (f.toArray(s, 1 * 3), f.toArray(s, 3 * 3), d.toArray(s, 0 * 3)); else { l.subVectors(st, X), u.set(l.y, -l.x), f.addVectors(l, u).add(X), d.subVectors(u, l).add(X); const M = s.length; vt ? (f.toArray(s, M - 1 * 3), d.toArray(s, M - 2 * 3), d.toArray(s, M - 4 * 3)) : (d.toArray(s, M - 2 * 3), f.toArray(s, M - 1 * 3), d.toArray(s, M - 4 * 3)) } break } } function yt(X) { let et = !1; for (let vt = 1, F = X.length - 1; vt < F; vt++)if (X[vt].distanceTo(X[vt + 1]) < r) { et = !0; break } if (!et) return X; const st = []; st.push(X[0]); for (let vt = 1, F = X.length - 1; vt < F; vt++)X[vt].distanceTo(X[vt + 1]) >= r && st.push(X[vt]); return st.push(X[X.length - 1]), st } } } const Im = (i, t) => { let e = []; return i.forEach(n => { n.toShapes(!0).forEach(s => { let o = []; if (s.extractPoints().shape.forEach(a => { o.push(new z(a.x * t, -a.y * t, 0)) }), o.length > 2) { const a = new ec(o); a.closed = n.currentPath.autoClose, e.push(a) } }) }), e }, ls = {}; function Nm(i) { if (ls[i]) return ls[i]; const t = document.createElement("video"); return t.src = i, t.loop = !0, t.muted = !0, t.play().catch(e => console.error("Video play failed for source: " + i, e)), ls[i] = t, console.log(`Created and cached new video element for source: ${i}`), t } class Om { constructor() { this.materials = [] } addMaterial(t) { this.materials.push(t) } getMaterials() { return this.materials } updateVideoTextures() { this.materials.forEach(t => { t.map instanceof tc && t.map.source.data.readyState === t.map.source.data.HAVE_ENOUGH_DATA && (t.map.needsUpdate = !0) }) } } const hc = new Om, Fm = (i, t) => { let e = parseInt(i.getLength() * 10), n = i.computeFrenetFrames(e, !0).binormals, r = i.getSpacedPoints(e), s = [];[-3, 3].forEach(g => { for (let _ = 0; _ <= e; _++) { let x = new z().copy(r[_]), p = new z().add(n[_]).multiplyScalar(g), h = x.add(p); s.push(h) } }); const a = new Ui(1, 1, e, 1).setFromPoints(s), c = Nm(t), l = new tc(c); l.wrapS = li, l.repeat.set(i.getLength() * .02, 1), l.colorSpace = re; let u = new lc({ map: l, side: Ne }); hc.addMaterial(u); let f = new He(a, u); return a.computeBoundingBox(), a.computeVertexNormals(), a.boundingBox.getCenter(new z), f.castShadow = !0, f.receiveShadow = !0, f }, fc = (i, t) => new Promise((e, n) => { const r = new Ds; let s = 2; const o = a => { const [c, l, u, f] = a.xml.getAttribute("viewBox").split(" ").map(Number), _ = Math.min(400 / u, 400 / f); Im(a.paths, _).map(x => Fm(x, t)).forEach(x => { s = s + Cm, x.translateY(f * _ / 2 - l * _), x.translateX(-u * _ / 2 + c * _), x.translateZ(s), ai.add(x) }), e() }; if (i.slice(-4).toLowerCase() === ".svg") r.load(i, o, void 0, n); else try { const a = r.parse(i); o(a) } catch (a) { n(a) } }), Bm = () => { if (typeof window.FileReader > "u") { let i = document.createElement("p"); i.innerHTML = "Sorry, drag and drop is not supported in your browser.", document.querySelector("body").appendChild(i) } document.ondragover = function () { return this.className = "hover", !1 }, document.ondragend = function () { return this.className = "", !1 }, document.ondrop = function (i) { this.className = "", i.preventDefault(); let t = i.dataTransfer.files[0], e = new FileReader; return e.onload = function (n) { fc(n.target.result, "trees.mp4") }, e.readAsText(t), !1 } }; Promise.all([Lm(), Dm("paper"), fc("L.svg", "crosswalk.mp4"), Bm()]).then(() => { dc() }).catch(i => { console.error("Error during initialization", i) }); const dc = () => { requestAnimationFrame(dc), hc.updateVideoTextures(), pn.render(ai, Ls) };
