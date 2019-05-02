using FluentValidation.Results;
using Noter.Application.Infrastructure;
using Noter.Application.Infrastructure.Commanding;
using Noter.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Noter.Application.Tests.InfrastructureTests
{
    internal class Item : IPinnable, IEquatable<Item>
    {
        public int Id { get; set; }
        public bool IsPinned { get; set; }
        public int Sequence { get; set; }


        public bool Equals(Item other)
        {
            return this == other;
        }
    }

    public class PinningTests
        : TestBase
    {

        [Fact]
        public void Pinning_AddShouldCorrectlySetSequence()
        {
            // Arrange
            var list = new List<Item>() {
                new Item () {Id=0, IsPinned = true, Sequence = 0},
                new Item () {Id=1, IsPinned = true, Sequence = 1},
                new Item () {Id=2, IsPinned = true, Sequence = 3}, // -> 2
                new Item () {Id=3, IsPinned = true, Sequence = 5}, // -> 4
                new Item () {Id=4, IsPinned = true, Sequence = 5},
                new Item () {Id=5, IsPinned = true, Sequence = 6},
                new Item () {Id=6, IsPinned = true, Sequence = 8},  // -> 7
            };

            var item = new Item() {Id=11, IsPinned = true, Sequence = 7 }; // -> 3
            // Act

            var update = PinnableHelper.Pin<Item>(list, item, 3).ToList();


            // Assert

            Assert.Equal(4, update.Count);
            

            Assert.Equal(2, update[0].Id);
            Assert.Equal(2, update[0].Sequence);

            Assert.Equal(item, update[1]);
            Assert.Equal(3, update[1].Sequence);

            Assert.Equal(3, update[2].Id);
            Assert.Equal(4, update[2].Sequence);

            Assert.Equal(6, update[3].Id);
            Assert.Equal(7, update[3].Sequence);


        }
    }
}