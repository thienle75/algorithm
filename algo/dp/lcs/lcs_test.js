#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var LCS = require('./lcs');

describe('Dynamic programming - Longest Common Subsequence test', function () {

    describe('commonSubsequence Function', function () {
        it('Emtry string test', function () {
            var lcs = new LCS();
            expect(lcs.commonSubsequence('huynhtrong', '')).to.equal(0);
        });

        it('Same string test', function () {
            var lcs = new LCS();
            expect(lcs.commonSubsequence('huynhtrong', 'huynhtrong')).to.equal(10);
        });

        it('Numberic string test', function () {
            var lcs = new LCS();
            expect(lcs.commonSubsequence('1234567890', '1234567890')).to.equal(10);
        });

        it('Space string test', function () {
            var lcs = new LCS();
            expect(lcs.commonSubsequence('huynh       trong', 'huynh trong')).to.equal(11);
        });

        it('DNA string test', function () {
            var lcs = new LCS();
            var s = 'ATGAACAAAGAAATTTTGGCTGTAGTTGAAGCCGTATCCAATGAAAAGGCGCTACCTCGCGAGAAGATTTTCGAAGCATTGGAAAGCGCGCTGGCGACAGCAACAAAGAAAAAATATGAACAAGAGATCGACGTCCGCGTACAGATCGATCGCAAAAGCGGTGATTTTGACACTTTCCGTCGCTGGTTAGTTGTTGATGAAGTCACCCAGCCGACCAAGGAAACACCCTTGAAGCCGCACGTTATGAAGATGAAAGCCTGAACCTGGGCGATTACGTTGAAGATCGATTGAGTCTGTTAC';
            var t = 'CTTTGACCGTATCACTACCCAGACGGCAAAACAGGTTATCGTGCAGAAAGTGCGTGAAGCCGAACGTGCGATGGTGGTTGATCAGTTCCGTGAACACGAAGGTGAAATCATCACCGGCGTGGTGAAAAAAGTAAACCGCGACAACATCTCTCTGGATCTGGGCAACAACGCTGAAGCCGTGATCCTGCGCGAAGATATGCTGCCGCGTGAAAACTTCCGCCCTGGCGACCGCGTTCGTGGCGTGCTCTATTCCGTTCGCCCGGAAGCGCGTGGCGCGCAACTGTTCGTCACTCGTTCCAA';
            expect(lcs.commonSubsequence(s, t)).to.equal(189);
        });
    });

    describe('backTracking Function', function () {
        it('Emtry string test', function () {
            var lcs = new LCS();
            expect(lcs.backTracking('huynhtrong', '')).to.equal('');
        });

        it('Same string test', function () {
            var lcs = new LCS();
            expect(lcs.backTracking('huynhtrong', 'huynhtrong')).to.equal('huynhtrong');
        });

        it('Numberic string test', function () {
            var lcs = new LCS();
            expect(lcs.backTracking('1234567890', '1234567890')).to.equal('1234567890');
        });

        it('Space string test', function () {
            var lcs = new LCS();
            expect(lcs.backTracking('huynh       trong', 'huynh trong')).to.equal('huynh trong');
        });

        it('DNA string test', function () {
            var lcs = new LCS();
            var s = 'ATGAACAAAGAAATTTTGGCTGTAGTTGAAGCCGTATCCAATGAAAAGGCGCTACCTCGCGAGAAGATTTTCGAAGCATTGGAAAGCGCGCTGGCGACAGCAACAAAGAAAAAATATGAACAAGAGATCGACGTCCGCGTACAGATCGATCGCAAAAGCGGTGATTTTGACACTTTCCGTCGCTGGTTAGTTGTTGATGAAGTCACCCAGCCGACCAAGGAAACACCCTTGAAGCCGCACGTTATGAAGATGAAAGCCTGAACCTGGGCGATTACGTTGAAGATCGATTGAGTCTGTTAC';
            var t = 'CTTTGACCGTATCACTACCCAGACGGCAAAACAGGTTATCGTGCAGAAAGTGCGTGAAGCCGAACGTGCGATGGTGGTTGATCAGTTCCGTGAACACGAAGGTGAAATCATCACCGGCGTGGTGAAAAAAGTAAACCGCGACAACATCTCTCTGGATCTGGGCAACAACGCTGAAGCCGTGATCCTGCGCGAAGATATGCTGCCGCGTGAAAACTTCCGCCCTGGCGACCGCGTTCGTGGCGTGCTCTATTCCGTTCGCCCGGAAGCGCGTGGCGCGCAACTGTTCGTCACTCGTTCCAA';
            var rel = 'TGAACAAAGAATTTGAGTGAAGCCGATGGGTATCGAACGAAGTGAACGCGTGGAAAAAAAAAACATCTCTGATCTGCAAAGCTGAGCTCGCGCGTTGTGATCCGCGCGACCTTGCGCGTGGAAGCTGCGCTTCGTTCGTTA';
            expect(lcs.backTracking(s, t)).to.equal(rel);
        });
    });

});
